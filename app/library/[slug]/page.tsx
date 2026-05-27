import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { animations, getAnimationBySlug } from "@/src/animations/registry";
import { DetailClient } from "@/src/components/detail/DetailClient";

export function generateStaticParams() {
  return animations.map((animation) => ({ slug: animation.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const animation = getAnimationBySlug(slug);

  if (!animation) {
    return { title: "Animation not found | OWOW Atlas" };
  }

  return {
    title: `${animation.title} | OWOW Atlas`,
    description: animation.summary,
  };
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
