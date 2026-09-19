import { PageContainer } from "@/components/layout/page-frame";
import { Icon } from "@/components/ui";

export function UpdateStrip() {
  return (
    <PageContainer>
      <p className="flex items-center justify-center gap-4 text-base text-neutral-700">
        <span aria-hidden="true" className="hidden h-px flex-1 bg-rule sm:block" />
        <Icon name="star" size={22} className="text-primary-500" />
        <span className="text-center">New courses and lessons added every week.</span>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-rule sm:block" />
      </p>
    </PageContainer>
  );
}
