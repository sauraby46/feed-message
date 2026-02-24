import dbConnect from "@/src/lib/dbConnect";
import UserModel from "@/src/model/User";
import bcrypt from "bcryptjs";

import { sendVerificationEmail } from "@/src/helpers/sendVerificationEmail";
import { success } from "zod";

export async function POST(request: Request) {
    await dbConnect();

    try {

        const { username, email, password } = await request.json()
        
        const existingUserVerifiedByUsername = await UserModel.findOne({
            username: username,
            isVerified: true
        })

        if (existingUserVerifiedByUsername) {
            return Response.json(
                {
                    success: false,
                    message: "Username is already taken. Please choose another one.",
                },
                { status: 400 }
            )
        }

        const existingUserByEmail = await UserModel.findOne({
            email: email,
            isVerified: true
        })

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        if (existingUserByEmail) {
            if (existingUserByEmail.isVerified) {
                return Response.json(
                    {
                        success: false,
                        message: "Email is already registered. Please use another email.",
                    },
                    { status: 400 }
                )
            }else{
                const hashedPassword = await bcrypt.hash(password, 10);
                existingUserByEmail.password = hashedPassword;
                existingUserByEmail.verifyCode = verifyCode;
                const expiryDate = new Date();
                expiryDate.setHours(expiryDate.getHours() + 1);
                existingUserByEmail.verifyCodeExpiry = expiryDate;
                await existingUserByEmail.save();

            }
        }else {
            const hashedPassword = await bcrypt.hash(password, 10);

            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours() + 1);

            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false,
                isAcceptingMessage: true,
                messages: []
            });
            await newUser.save();
        }

        const emailResponse = await sendVerificationEmail(
            email, 
            username,
            verifyCode,);

        if (!emailResponse.success) {
            return Response.json(
                {
                    success: false,
                    message: "Failed to send verification email. Please try again later.",
                },
                { status: 500 }
            )
        }

        return Response.json(
            {
                success: true,
                message: "Sign-up successful! A verification email has been sent to your email address.",
            },
            { status: 200 }
        )

    } catch (error) {
        console.error("Error during sign-up:", error);
        return Response.json(
            {
                success: false,
                message: "An error occurred during sign-up. Please try again later.",
            },
            { status: 500 }
        )
    }
}
