import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Email to company
    await transporter.sendMail({
      from: `"Mivo Solutions Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "contact@mivosolutions.com",
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3>Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Mivo Solutions website contact form.
          </p>
        </div>
      `
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"Mivo Solutions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Mivo Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #059669 0%, #1f7d4d 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">Mivo Solutions</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #333;">Thank you for reaching out!</h2>
            <p style="color: #666; line-height: 1.6;">Hi ${name},</p>
            <p style="color: #666; line-height: 1.6;">
              We've received your message and will get back to you as soon as possible. 
              Our team typically responds within 24-48 hours.
            </p>
            
            <div style="background-color: white; padding: 20px; border-left: 4px solid #059669; margin: 20px 0;">
              <p style="margin: 0; color: #666;"><strong>Your message:</strong></p>
              <p style="color: #333; margin: 10px 0 0 0;">${message}</p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              If you have any urgent questions, feel free to call us at <strong>+250 790 603 658</strong>
            </p>
            
            <div style="margin-top: 30px; text-align: center;">
              <p style="color: #666;">Best regards,</p>
              <p style="color: #059669; font-weight: bold; font-size: 18px;">Mivo Solutions Team</p>
            </div>
          </div>
          
          <div style="background-color: #333; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              © ${new Date().getFullYear()} Mivo Solutions Ltd. All rights reserved.
            </p>
            <p style="color: #999; margin: 10px 0 0 0; font-size: 12px;">
              Kigali, Rwanda | www.mivosolutions.com
            </p>
          </div>
        </div>
      `
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully"
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again or email us directly."
      },
      { status: 500 }
    );
  }
}
