import React from 'react';
import Link from 'next/link';
import { services } from '@/data/services';

interface RichTextWithLinksProps {
    content: string;
    currentLocationSlug: string;
}

export function RichTextWithLinks({ content, currentLocationSlug }: RichTextWithLinksProps) {
    if (!content) return null;

    // Build a dictionary of keywords to services
    const keywordMap: { [key: string]: string } = {};

    services.forEach(service => {
        // Add the main name and short name
        keywordMap[service.name.toLowerCase()] = service.slug;
        keywordMap[service.shortName.toLowerCase()] = service.slug;

        // Add the slug itself as a keyword (replace hyphens with spaces)
        keywordMap[service.slug.replace(/-/g, ' ').toLowerCase()] = service.slug;

        // Add additional keywords if they exist
        if (service.keywords) {
            service.keywords.forEach(kw => {
                // only use short keywords to avoid replacing too much text
                if (kw.split(' ').length <= 3) {
                    keywordMap[kw.toLowerCase()] = service.slug;
                }
            });
        }
    });

    // Sort keywords by length descending so we match longer phrases first (e.g. "AC Repair" before "AC")
    const sortedKeywords = Object.keys(keywordMap).sort((a, b) => b.length - a.length);

    let parts: (string | React.JSX.Element)[] = [content];

    sortedKeywords.forEach(keyword => {
        const newParts: (string | React.JSX.Element)[] = [];

        parts.forEach(part => {
            if (typeof part === 'string') {
                // Create a regex to match the keyword as a whole word, case-insensitive
                // Use a try-catch in case some keywords have invalid regex characters
                try {
                    // Escape special regex characters in the keyword
                    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const regex = new RegExp(`\\b(${escapedKeyword})\\b`, 'gi');

                    let lastIndex = 0;
                    let match;

                    while ((match = regex.exec(part)) !== null) {
                        const matchIndex = match.index;
                        const matchedText = match[0];

                        // Add text before the match
                        if (matchIndex > lastIndex) {
                            newParts.push(part.substring(lastIndex, matchIndex));
                        }

                        // Add the linked match
                        const targetSlug = keywordMap[keyword];
                        newParts.push(
                            <Link
                                key={`${targetSlug}-${matchIndex}`}
                                href={`/${targetSlug}/${currentLocationSlug}`}
                                className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
                                title={`${matchedText} in ${currentLocationSlug}`}
                            >
                                {matchedText}
                            </Link>
                        );

                        lastIndex = regex.lastIndex;
                    }

                    // Add remaining text
                    if (lastIndex < part.length) {
                        newParts.push(part.substring(lastIndex));
                    }
                } catch {
                    // If regex fails, just keep the part as string
                    newParts.push(part);
                }
            } else {
                newParts.push(part);
            }
        });

        parts = newParts;
    });

    // We need to wrap the elements in a span or fragment to return them
    return (
        <span className="rich-text-content">
            {parts.map((part, i) => (
                <React.Fragment key={i}>{part}</React.Fragment>
            ))}
        </span>
    );
}
