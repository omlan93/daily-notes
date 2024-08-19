import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file as Blob);

    const response = await fetch("/api/file", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setPreview(data.url);
  };

  const styles = {
    form: "bg-gray-100 p-4 rounded-lg",
    input: "border p-2 mb-4 w-full border-gray-300 rounded",
  };

  return (
    <form action="" onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="file"
        onChange={(e) => setFile(e.target.files?.item(0) || null)}
      />
      <Button type="submit">Upload</Button>
      {preview && (
        <Image
          src={preview}
          alt="test"
          className="w-auto h-auto"
          width={200}
          height={200}
        />
      )}
      {/* <Image
        src={
          "https://edwuizsu44hg1knv.public.blob.vercel-storage.com/curry-rU9DlBjUEp89liUvrHuPDlE8y9LJBt.jpg"
        }
        alt="test"
        width={100}
        height={100}
        className="w-auto h-auto"
      /> */}
    </form>
  );
}
