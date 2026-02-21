import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-4 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <ol className="flex items-center text-sm md:text-base text-slate-500">
                <li className="flex items-center">
                    <Link
                        href="/"
                        className="flex items-center hover:text-blue-600 transition-colors"
                        aria-label="Home"
                    >
                        <Home className="w-4 h-4" />
                    </Link>
                </li>

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="flex items-center">
                            <ChevronRight className="w-4 h-4 mx-1 md:mx-2 text-slate-300 flex-shrink-0" />
                            {isLast ? (
                                <span className="text-slate-900 font-semibold" aria-current="page">
                                    {item.label}
                                </span>
                            ) : item.href ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
