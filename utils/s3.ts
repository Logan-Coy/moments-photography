"use server";

import {
  S3Client,
  ListObjectsV2Command,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

const client = new S3Client({ region: "us-east-2" });

export const getImagesFromS3 = async (folder: string) => {
  const command = new ListObjectsV2Command({
    Bucket: "momentsphotobucket",
    Prefix: folder,
  });

  try {
    const response = await client.send(command);

    const bucketList = response.Contents ?? [];

    const photoArray = bucketList.flatMap((listItem) => {
      if (listItem.Key === folder) return [];
      const url = `${process.env["S3_BUCKET_URL"]}/${listItem.Key}`;
      return [{ url, key: listItem.Key }];
    });

    return photoArray;
  } catch (err) {
    console.error(err);
  }
};

export const uploadToS3 = async (fileName: string) => {
  const command = new PutObjectCommand({
    Bucket: "momentsphotobucket",
    Key: `${fileName}`,
    Body: fileName,
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

export const deletePhoto = async (fileName: string) => {
  const command = new DeleteObjectCommand({
    Bucket: "momentsphotobucket",
    Key: `${fileName}`,
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};
