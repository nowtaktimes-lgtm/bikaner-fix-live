import { redirect } from "next/navigation";
import { services } from "@/data/services";

interface PageProps {
    params: Promise<{
        service: string;
    }>;
}

export default async function ServiceRootPage(props: PageProps) {
    const params = await props.params;

    // Check if the service exists
    const service = services.find((s) => s.slug === params.service);

    if (!service) {
        // If service doesn't exist (e.g. /random-text), let Next.js handle 404
        return null;
    }

    // Redirect to the Master Location (Bikaner)
    redirect(`/${service.slug}/bikaner`);
}
