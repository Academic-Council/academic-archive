import {type ReactNode} from 'react';
import {TitleFormatterProvider} from '@docusaurus/theme-common/internal';

// Swizzled from @docusaurus/theme-classic.
// The default formatter renders "<page title> | <site title>". This resource
// reads better site-first, e.g. "Academic Archive - Psychology".
function formatter({
  title,
  siteTitle,
}: {
  title?: string;
  siteTitle: string;
}): string {
  const trimmedTitle = title?.trim();
  if (!trimmedTitle || trimmedTitle === siteTitle) {
    return siteTitle;
  }
  return `${siteTitle} - ${trimmedTitle}`;
}

export default function ThemeProviderTitleFormatter({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <TitleFormatterProvider formatter={formatter}>
      {children}
    </TitleFormatterProvider>
  );
}
