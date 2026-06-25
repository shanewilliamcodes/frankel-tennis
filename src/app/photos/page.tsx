import type { Metadata } from "next";
import { photos } from "@/data/photos";
import { PageHeader } from "@/components/ui";
import { PhotoGallery } from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photo gallery of Frankel Jaguars boys tennis — team photos, match day and more.",
};

export default function PhotosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Photos"
        subtitle="Team photos, match days and courtside moments from the Jaguars' season."
      />
      <section className="section">
        <div className="container-page">
          <PhotoGallery photos={photos} />
        </div>
      </section>
    </>
  );
}
