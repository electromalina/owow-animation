import { notFound } from "next/navigation";

import { animations, getAnimationBySlug } from "@/src/animations/registry";
import { DetailClient } from "@/src/components/detail/DetailClient";

export function generateStaticParams() {
  return animations.map((animation) => ({ slug: animation.slug }));
}

export default async function AnimationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const animation = getAnimationBySlug(slug);

  if (!animation) {
    notFound();
  }

  return <DetailClient animation={animation} />;
}
