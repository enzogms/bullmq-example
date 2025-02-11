import nodemailer from "nodemailer";
import { mailConfig } from "../config/mail";
import SMTPPool from "nodemailer/lib/smtp-pool";

export const Mail = nodemailer.createTransport(
  mailConfig as SMTPPool.MailOptions
);
