import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

const client = new S3Client({ region: "us-east-2" });

export const uploadToS3 = async (
  fileName: string,
  data: any,
  folder: string,
) => {
  const command = new PutObjectCommand({
    Bucket: "momentsphotobucket",
    Key: `${folder}${fileName}`,
    Body: data,
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;
  const folder = data.get("folder") as string;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  await uploadToS3(file.name, buffer, folder);

  return NextResponse.json({ success: true });
}
