import React from 'react';
import { cn } from '@/lib/utils';
import {
	Check,
	Copy,
	LucideIcon,
	Mail,
	Phone,
	Github,
} from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';

// Alex's data
const APP_EMAIL = "alex.morgan.dev@example.com";
const APP_PHONE = "+91 98765 12345";
const GITHUB_LINK = "https://github.com/alex-morgan";

function BorderSeparator() {
	return <div className="w-full border-b" />;
}

type ContactBoxProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	title: string;
	description: string;
};

function Box({
	title,
	description,
	className,
	children,
	...props
}: ContactBoxProps) {
	return (
		<div
			className={cn(
				'flex flex-col justify-between border-b md:border-r md:border-b-0',
				className,
			)}
		>
			<div className="bg-muted/40 flex items-center gap-x-3 border-b p-4">
				<props.icon className="text-muted-foreground size-5" strokeWidth={1} />
				<h2 className="font-heading text-lg font-medium tracking-wider">
					{title}
				</h2>
			</div>
			<div className="flex items-center gap-x-2 p-4 py-12">{children}</div>
			<div className="border-t p-4">
				<p className="text-muted-foreground text-sm">{description}</p>
			</div>
		</div>
	);
}

type CopyButtonProps = ButtonProps & {
	textToCopy: string;
};

function CopyButton({
	className,
	variant = 'ghost',
	size = 'icon',
	textToCopy,
	...props
}: CopyButtonProps) {
	const [copied, setCopied] = React.useState<boolean>(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(textToCopy);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

	return (
		<Button
			variant={variant}
			size={size}
			className={cn('disabled:opacity-100', className)}
			onClick={handleCopy}
			aria-label={copied ? 'Copied' : 'Copy to clipboard'}
			disabled={copied || props.disabled}
			{...props}
		>
			<div
				className={cn(
					'transition-all',
					copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
				)}
			>
				<Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
			</div>
			<div
				className={cn(
					'absolute transition-all',
					copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
				)}
			>
				<Copy aria-hidden="true" className="size-3.5" />
			</div>
		</Button>
	);
}


export default function Contact() {
	const socialLinks = [
		{
			icon: Github,
			href: GITHUB_LINK,
			label: 'GitHub',
		},
	];

	return (
        <section id="contact">
            <div className="w-full">
                <div className="mx-auto h-full max-w-6xl">
                    <div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16 text-center">
                        <h1 className="text-4xl font-bold md:text-5xl font-heading">
                            Contact
                        </h1>
                        <p className="text-muted-foreground mt-4 text-base">
                            Have a question or want to collaborate? Reach out anytime.
                        </p>
                    </div>
                    <BorderSeparator />
                    <div className="grid md:grid-cols-2">
                        <Box
                            icon={Mail}
                            title="Email"
                            description="I'll get back to you as soon as possible."
                        >
                            <a
                                href={`mailto:${APP_EMAIL}`}
                                className="font-mono text-base font-medium tracking-wide hover:underline"
                            >
                                {APP_EMAIL}
                            </a>
                            <CopyButton className="size-6" textToCopy={APP_EMAIL} />
                        </Box>
                        <Box
                            icon={Phone}
                            title="Phone"
                            description="Available Mon-Fri, 9am-5pm IST."
                            className="border-b-0 md:border-r-0"
                        >
                            <div>
                                <div className="flex items-center gap-x-2">
                                    <a
                                        href={`tel:${APP_PHONE}`}
                                        className="block font-mono text-base font-medium tracking-wide hover:underline"
                                    >
                                        {APP_PHONE}
                                    </a>
                                    <CopyButton className="size-6" textToCopy={APP_PHONE} />
                                </div>
                            </div>
                        </Box>
                    </div>
                    <BorderSeparator />
                    <div className="relative flex h-full min-h-[320px] items-center justify-center">
                        <div
                            className={cn(
                                'z--10 absolute inset-0 size-full',
                                'bg-[radial-gradient(color-mix(in_oklab,var(--foreground)30%,transparent)_1px,transparent_1px)]',
                                'bg-[size:32px_32px]',
                                '[mask-image:radial-gradient(ellipse_at_center,var(--background)_30%,transparent)]',
                            )}
                        />

                        <div className="relative z-1 space-y-6">
                            <h2 className="text-center text-3xl font-bold md:text-4xl font-heading">
                                Find me online
                            </h2>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-muted/50 hover:bg-accent flex items-center gap-x-2 rounded-full border px-4 py-2"
                                    >
                                        <link.icon className="size-4" />
                                        <span className="font-mono text-sm font-medium tracking-wide">
                                            {link.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
}
