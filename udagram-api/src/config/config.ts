import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  pg_port: Number(process.env.POSTGRES_PORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  port: Number(process.env.PORT),
  aws_region: process.env.AWS_REGION,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
