'use client';

import { useState, useId } from 'react';
import Link from 'next/link';
import {
	MapPin,
	Mail,
	Phone,
	Clock,
	ChevronRight,
	CheckCircle,
	ArrowRight,
	AlertCircle,
} from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';

// ─── Static data ──────────────────────────────────────────────────────────────

const serviceOptions = [
	'Web & Software Development',
	'Mobile App Development',
	'Digital Marketing',
	'Hosting & Infrastructure',
	'Automation',
	'Customer Experience Management',
	'IT Consulting & IT Services',
];

const budgetOptions = [
	'Under £5,000',
	'£5,000 – £15,000',
	'£15,000 – £50,000',
	'£50,000 – £100,000',
	'£100,000+',
	'Not sure yet',
];

const contactDetails = [
	{
		icon: MapPin,
		label: 'Address',
		value: '12 Innovation Street\nLondon, EC2A 4NE, UK',
		href: undefined,
	},
	{
		icon: Mail,
		label: 'Email',
		value: 'hello@space-ai.com',
		href: 'mailto:hello@space-ai.com',
	},
	{
		icon: Phone,
		label: 'Phone',
		value: '+44 (0) 20 7946 0958',
		href: 'tel:+442079460958',
	},
	{
		icon: Clock,
		label: 'Business Hours',
		value: 'Mon – Fri, 9:00 AM – 6:00 PM GMT',
		href: undefined,
	},
] as const;

const faqs = [
	{
		q: 'How quickly will you respond?',
		a: "We respond to all enquiries within 24 hours on business days. For urgent projects, call us directly and we'll get back to you as soon as possible.",
	},
	{
		q: 'Do you work with international clients?',
		a: 'Yes. We work with clients across the US, Europe, Asia-Pacific, and beyond. All client communication and project management is fully remote-ready.',
	},
	{
		q: 'Can I get a free consultation?',
		a: 'Absolutely. Every engagement starts with a free discovery call where we explore your project and offer honest, no-commitment initial advice.',
	},
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
	fullName: string;
	email: string;
	phone: string;
	company: string;
	service: string;
	budget: string;
	message: string;
}

interface FormErrors {
	fullName?: string;
	email?: string;
	service?: string;
	budget?: string;
	message?: string;
}

// ─── Validation ───────────────────────────────────────────────────────────────

function validate(data: FormData): FormErrors {
	const errors: FormErrors = {};
	if (!data.fullName.trim() || data.fullName.trim().length < 2)
		errors.fullName = 'Please enter your full name (at least 2 characters).';
	if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
		errors.email = 'Please enter a valid email address.';
	if (!data.service)
		errors.service = "Please select the service you're interested in.";
	if (!data.budget) errors.budget = 'Please select a budget range.';
	if (!data.message.trim() || data.message.trim().length < 20)
		errors.message = 'Please describe your project (at least 20 characters).';
	return errors;
}

// ─── Field Error ──────────────────────────────────────────────────────────────

function FieldError({ id, message }: { id: string; message: string }) {
	return (
		<p
			id={id}
			role='alert'
			className='mt-1.5 flex items-center gap-1 text-xs text-red-600'
		>
			<AlertCircle size={11} className='shrink-0' />
			{message}
		</p>
	);
}

// ─── Map Placeholder ──────────────────────────────────────────────────────────

function MapPlaceholder() {
	return (
		<div
			className='relative w-full h-72 md:h-80 rounded-card overflow-hidden border border-border'
			style={{
				background:
					'linear-gradient(135deg, #ECFEFF 0%, #E0F2FE 60%, #F8FAFC 100%)',
			}}
			role='img'
			aria-label='Map showing office location at 12 Innovation Street, London'
		>
			{/* Street grid */}
			<div
				className='absolute inset-0'
				aria-hidden='true'
				style={{
					backgroundImage:
						'linear-gradient(rgba(6,182,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.06) 1px, transparent 1px)',
					backgroundSize: '52px 52px',
				}}
			/>
			{/* Road blocks */}
			<div
				className='absolute inset-0 overflow-hidden opacity-25 pointer-events-none'
				aria-hidden='true'
			>
				<div className='absolute left-0 right-0 top-[42%] h-7 bg-white' />
				<div className='absolute left-0 right-0 top-[62%] h-5 bg-white/70' />
				<div className='absolute top-0 bottom-0 left-[38%] w-6 bg-white' />
				<div className='absolute top-0 bottom-0 right-[28%] w-5 bg-white/70' />
			</div>

			{/* Pin */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+10px)] flex flex-col items-center'>
				<div
					className='w-12 h-12 rounded-full flex items-center justify-center'
					style={{
						background: 'linear-gradient(120deg, #06B6D4, #3B82F6)',
						boxShadow: '0 4px 20px rgba(6,182,212,0.35)',
					}}
				>
					<MapPin
						size={22}
						className='text-white'
						fill='rgba(255,255,255,0.2)'
					/>
				</div>
				<div
					className='w-3 h-3 rounded-full mt-0.5'
					style={{ background: 'rgba(6,182,212,0.15)' }}
				/>
			</div>

			{/* Address overlay */}
			<div
				className='absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-card border border-border p-4 min-w-[172px]'
				style={{ boxShadow: '0 4px 20px rgba(30,22,38,0.08)' }}
			>
				<p className='text-sm font-bold text-ink'>space-ai</p>
				<p className='text-xs text-muted-foreground mt-1 leading-relaxed'>
					12 Innovation Street
					<br />
					London, EC2A 4NE
				</p>
			</div>

			<span className='absolute bottom-4 right-4 text-[10px] text-muted-foreground/40 select-none'>
				Map placeholder
			</span>
		</div>
	);
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ContactPageContent() {
	const uid = useId();

	const [formData, setFormData] = useState<FormData>({
		fullName: '',
		email: '',
		phone: '',
		company: '',
		service: '',
		budget: '',
		message: '',
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name as keyof FormErrors])
			setErrors((prev) => ({ ...prev, [name]: undefined }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const validationErrors = validate(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			document
				.getElementById(`${uid}-${Object.keys(validationErrors)[0]}`)
				?.focus();
			return;
		}
		setIsSubmitting(true);
		await new Promise<void>((resolve) => setTimeout(resolve, 900));
		setIsSubmitting(false);
		setSubmitted(true);
	};

	const handleReset = () => {
		setSubmitted(false);
		setFormData({
			fullName: '',
			email: '',
			phone: '',
			company: '',
			service: '',
			budget: '',
			message: '',
		});
		setErrors({});
	};

	// Input styles — Royal Amethyst focus ring
	const inputBase =
		'w-full px-4 py-2.5 rounded-btn border text-sm text-ink placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-colors bg-surface';
	const inputNormal = `${inputBase} border-border`;
	const inputError = `${inputBase} border-red-400 bg-red-50/40 focus:ring-red-200 focus:border-red-400`;
	const cls = (field: keyof FormErrors) =>
		errors[field] ? inputError : inputNormal;

	const firstName = formData.fullName.trim().split(' ')[0];

	return (
		<>
			{/* ── Hero ─────────────────────────────────────────────────────────── */}
			<section className='relative pt-36 pb-24 px-6 overflow-hidden bg-canvas border-b border-border'>
				<div
					className='absolute -top-20 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none'
					aria-hidden='true'
					style={{
						background:
							'radial-gradient(ellipse at top right, rgba(6,182,212,0.07) 0%, transparent 65%)',
					}}
				/>

				<div className='max-w-7xl mx-auto relative'>
					<nav
						aria-label='Breadcrumb'
						className='flex items-center gap-1.5 text-[13px] text-muted-foreground mb-8'
					>
						<Link href='/' className='hover:text-ink transition-colors'>
							Home
						</Link>
						<ChevronRight
							size={13}
							className='text-border shrink-0'
							aria-hidden='true'
						/>
						<span className='text-ink font-medium' aria-current='page'>
							Contact Us
						</span>
					</nav>

					<AnimatedSection>
						<span className='gold-rule' aria-hidden='true' />
						<span className='eyebrow'>
							<span className='eyebrow-star' aria-hidden='true'>
								✦
							</span>
							Contact
						</span>
						<h1
							className='mt-6 font-display font-bold text-ink text-balance'
							style={{
								fontSize: 'clamp(36px, 5vw, 58px)',
								lineHeight: 1.05,
								letterSpacing: '-0.03em',
							}}
						>
							Get In Touch
						</h1>
						<p
							className='mt-5 text-muted-foreground max-w-xl leading-relaxed'
							style={{ fontSize: 19, lineHeight: 1.65 }}
						>
							Tell us about your project and we&apos;ll get back to you within
							24 hours.
						</p>
					</AnimatedSection>
				</div>
			</section>

			{/* ── Contact Layout ───────────────────────────────────────────────── */}
			<section className='py-20 px-6 bg-canvas'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start'>
						{/* ── Left: Contact info ───────────────────────────────────────── */}
						<AnimatedSection className='lg:col-span-2'>
							<div className='card-royal p-8 lg:sticky lg:top-24'>
								<h2
									className='font-display font-semibold text-ink mb-1.5'
									style={{ fontSize: 18 }}
								>
									Talk to us
								</h2>
								<p className='text-sm text-muted-foreground leading-relaxed mb-8'>
									We&apos;re a friendly team. Feel free to reach out — even if
									you&apos;re not sure yet where to start.
								</p>

								<ul className='space-y-6'>
									{contactDetails.map(({ icon: Icon, label, value, href }) => (
										<li key={label} className='flex gap-4'>
											<div className='icon-box mt-0.5 shrink-0'>
												<Icon size={16} aria-hidden='true' />
											</div>
											<div>
												<p className='text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5'>
													{label}
												</p>
												{href ? (
													<a
														href={href}
														className='text-sm text-ink font-medium hover:text-royal-deep transition-colors whitespace-pre-line'
													>
														{value}
													</a>
												) : (
													<p className='text-sm text-ink font-medium whitespace-pre-line'>
														{value}
													</p>
												)}
											</div>
										</li>
									))}
								</ul>

								{/* Social links */}
								<div className='mt-8 pt-8 border-t border-border'>
									<p className='text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-4'>
										Follow us
									</p>
									<div className='flex items-center gap-3'>
										{/* LinkedIn */}
										<a
											href='https://linkedin.com'
											target='_blank'
											rel='noopener noreferrer'
											aria-label='space-ai on LinkedIn'
											className='w-9 h-9 rounded-btn flex items-center justify-center transition-all duration-150 text-royal'
											style={{
												background: '#ECFEFF',
												border: '1px solid rgba(184,134,11,0.18)',
											}}
											onMouseEnter={(e) => {
												const el = e.currentTarget as HTMLElement;
												el.style.background =
													'linear-gradient(120deg, #06B6D4, #3B82F6)';
												el.style.color = '#fff';
												el.style.border = '1px solid transparent';
											}}
											onMouseLeave={(e) => {
												const el = e.currentTarget as HTMLElement;
												el.style.background = '#ECFEFF';
												el.style.color = '';
												el.style.border = '1px solid rgba(184,134,11,0.18)';
											}}
										>
											<svg
												width='15'
												height='15'
												viewBox='0 0 24 24'
												fill='currentColor'
												aria-hidden='true'
											>
												<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
												<rect x='2' y='9' width='4' height='12' />
												<circle cx='4' cy='4' r='2' />
											</svg>
										</a>
										{/* X / Twitter */}
										<a
											href='https://x.com'
											target='_blank'
											rel='noopener noreferrer'
											aria-label='space-ai on X'
											className='w-9 h-9 rounded-btn flex items-center justify-center transition-all duration-150 text-royal'
											style={{
												background: '#ECFEFF',
												border: '1px solid rgba(184,134,11,0.18)',
											}}
											onMouseEnter={(e) => {
												const el = e.currentTarget as HTMLElement;
												el.style.background =
													'linear-gradient(120deg, #06B6D4, #3B82F6)';
												el.style.color = '#fff';
												el.style.border = '1px solid transparent';
											}}
											onMouseLeave={(e) => {
												const el = e.currentTarget as HTMLElement;
												el.style.background = '#ECFEFF';
												el.style.color = '';
												el.style.border = '1px solid rgba(184,134,11,0.18)';
											}}
										>
											<svg
												width='13'
												height='13'
												viewBox='0 0 24 24'
												fill='currentColor'
												aria-hidden='true'
											>
												<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
											</svg>
										</a>
										{/* GitHub */}
										<a
											href='https://github.com'
											target='_blank'
											rel='noopener noreferrer'
											aria-label='space-ai on GitHub'
											className='w-9 h-9 rounded-btn flex items-center justify-center transition-all duration-150 text-royal'
											style={{
												background: '#ECFEFF',
												border: '1px solid rgba(184,134,11,0.18)',
											}}
											onMouseEnter={(e) => {
												const el = e.currentTarget as HTMLElement;
												el.style.background =
													'linear-gradient(120deg, #06B6D4, #3B82F6)';
												el.style.color = '#fff';
												el.style.border = '1px solid transparent';
											}}
											onMouseLeave={(e) => {
												const el = e.currentTarget as HTMLElement;
												el.style.background = '#ECFEFF';
												el.style.color = '';
												el.style.border = '1px solid rgba(184,134,11,0.18)';
											}}
										>
											<svg
												width='15'
												height='15'
												viewBox='0 0 24 24'
												fill='currentColor'
												aria-hidden='true'
											>
												<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</AnimatedSection>

						{/* ── Right: Form / Success ─────────────────────────────────────── */}
						<AnimatedSection delay={0.1} className='lg:col-span-3'>
							<div className='card-royal p-8 md:p-10'>
								{submitted ? (
									/* ── Success state ── */
									<div className='flex flex-col items-center text-center py-10'>
										<div
											className='w-16 h-16 rounded-full flex items-center justify-center mb-5'
											style={{
												background: '#ECFEFF',
												border: '1px solid rgba(6,182,212,0.20)',
											}}
										>
											<CheckCircle
												size={32}
												className='text-royal'
												aria-hidden='true'
											/>
										</div>
										<h2
											className='font-display font-bold text-ink'
											style={{ fontSize: 22 }}
										>
											Message sent!
										</h2>
										<p
											className='mt-3 text-muted-foreground leading-relaxed max-w-sm'
											style={{ fontSize: 15 }}
										>
											Thanks{firstName ? `, ${firstName}` : ''}! We&apos;ve
											received your enquiry and will get back to you within 24
											hours on business days.
										</p>
										<button
											onClick={handleReset}
											className='mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-deep hover:underline underline-offset-2'
										>
											Send another message
										</button>
									</div>
								) : (
									/* ── Contact form ── */
									<>
										<h2
											className='font-display font-semibold text-ink mb-1'
											style={{ fontSize: 18 }}
										>
											Send us a message
										</h2>
										<p className='text-sm text-muted-foreground mb-8'>
											Fields marked{' '}
											<span
												aria-hidden='true'
												className='text-red-500 font-semibold'
											>
												*
											</span>{' '}
											are required.
										</p>

										<form
											onSubmit={handleSubmit}
											noValidate
											aria-label='Contact form'
											className='space-y-5'
										>
											{/* Row 1: Full Name + Email */}
											<div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
												<div>
													<label
														htmlFor={`${uid}-fullName`}
														className='block text-sm font-semibold text-ink mb-1.5'
													>
														Full Name{' '}
														<span aria-hidden='true' className='text-red-500'>
															*
														</span>
													</label>
													<input
														id={`${uid}-fullName`}
														name='fullName'
														type='text'
														autoComplete='name'
														placeholder='Jane Smith'
														value={formData.fullName}
														onChange={handleChange}
														aria-required='true'
														aria-invalid={!!errors.fullName}
														aria-describedby={
															errors.fullName
																? `${uid}-fullName-error`
																: undefined
														}
														className={cls('fullName')}
													/>
													{errors.fullName && (
														<FieldError
															id={`${uid}-fullName-error`}
															message={errors.fullName}
														/>
													)}
												</div>

												<div>
													<label
														htmlFor={`${uid}-email`}
														className='block text-sm font-semibold text-ink mb-1.5'
													>
														Email Address{' '}
														<span aria-hidden='true' className='text-red-500'>
															*
														</span>
													</label>
													<input
														id={`${uid}-email`}
														name='email'
														type='email'
														autoComplete='email'
														placeholder='jane@company.com'
														value={formData.email}
														onChange={handleChange}
														aria-required='true'
														aria-invalid={!!errors.email}
														aria-describedby={
															errors.email ? `${uid}-email-error` : undefined
														}
														className={cls('email')}
													/>
													{errors.email && (
														<FieldError
															id={`${uid}-email-error`}
															message={errors.email}
														/>
													)}
												</div>
											</div>

											{/* Row 2: Phone + Company (optional) */}
											<div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
												<div>
													<label
														htmlFor={`${uid}-phone`}
														className='block text-sm font-semibold text-ink mb-1.5'
													>
														Phone{' '}
														<span className='text-muted-foreground font-normal text-xs'>
															(optional)
														</span>
													</label>
													<input
														id={`${uid}-phone`}
														name='phone'
														type='tel'
														autoComplete='tel'
														placeholder='+44 7700 000 000'
														value={formData.phone}
														onChange={handleChange}
														className={inputNormal}
													/>
												</div>

												<div>
													<label
														htmlFor={`${uid}-company`}
														className='block text-sm font-semibold text-ink mb-1.5'
													>
														Company{' '}
														<span className='text-muted-foreground font-normal text-xs'>
															(optional)
														</span>
													</label>
													<input
														id={`${uid}-company`}
														name='company'
														type='text'
														autoComplete='organization'
														placeholder='Acme Ltd'
														value={formData.company}
														onChange={handleChange}
														className={inputNormal}
													/>
												</div>
											</div>

											{/* Service dropdown */}
											<div>
												<label
													htmlFor={`${uid}-service`}
													className='block text-sm font-semibold text-ink mb-1.5'
												>
													Service Interested In{' '}
													<span aria-hidden='true' className='text-red-500'>
														*
													</span>
												</label>
												<select
													id={`${uid}-service`}
													name='service'
													value={formData.service}
													onChange={handleChange}
													aria-required='true'
													aria-invalid={!!errors.service}
													aria-describedby={
														errors.service ? `${uid}-service-error` : undefined
													}
													className={cls('service')}
												>
													<option value=''>Select a service…</option>
													{serviceOptions.map((s) => (
														<option key={s} value={s}>
															{s}
														</option>
													))}
												</select>
												{errors.service && (
													<FieldError
														id={`${uid}-service-error`}
														message={errors.service}
													/>
												)}
											</div>

											{/* Budget dropdown */}
											<div>
												<label
													htmlFor={`${uid}-budget`}
													className='block text-sm font-semibold text-ink mb-1.5'
												>
													Budget Range{' '}
													<span aria-hidden='true' className='text-red-500'>
														*
													</span>
												</label>
												<select
													id={`${uid}-budget`}
													name='budget'
													value={formData.budget}
													onChange={handleChange}
													aria-required='true'
													aria-invalid={!!errors.budget}
													aria-describedby={
														errors.budget ? `${uid}-budget-error` : undefined
													}
													className={cls('budget')}
												>
													<option value=''>Select a budget range…</option>
													{budgetOptions.map((b) => (
														<option key={b} value={b}>
															{b}
														</option>
													))}
												</select>
												{errors.budget && (
													<FieldError
														id={`${uid}-budget-error`}
														message={errors.budget}
													/>
												)}
											</div>

											{/* Message */}
											<div>
												<label
													htmlFor={`${uid}-message`}
													className='block text-sm font-semibold text-ink mb-1.5'
												>
													Message{' '}
													<span aria-hidden='true' className='text-red-500'>
														*
													</span>
												</label>
												<textarea
													id={`${uid}-message`}
													name='message'
													rows={5}
													placeholder="Tell us about your project — what you're building, your timeline, and any specific requirements…"
													value={formData.message}
													onChange={handleChange}
													aria-required='true'
													aria-invalid={!!errors.message}
													aria-describedby={
														errors.message ? `${uid}-message-error` : undefined
													}
													className={`${cls('message')} resize-y min-h-[120px]`}
												/>
												{errors.message && (
													<FieldError
														id={`${uid}-message-error`}
														message={errors.message}
													/>
												)}
											</div>

											{/* Submit */}
											<div className='pt-1'>
												<button
													type='submit'
													disabled={isSubmitting}
													className='btn-primary w-full sm:w-auto justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100'
												>
													{isSubmitting ? (
														<>
															<span
																className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'
																aria-hidden='true'
															/>
															Sending…
														</>
													) : (
														<>
															Send Message{' '}
															<ArrowRight size={15} aria-hidden='true' />
														</>
													)}
												</button>
												<p className='mt-3 text-xs text-muted-foreground'>
													By submitting, you agree to our{' '}
													<Link
														href='/privacy'
														className='underline underline-offset-2 hover:text-ink transition-colors'
													>
														Privacy Policy
													</Link>
													. We never share your information.
												</p>
											</div>
										</form>
									</>
								)}
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* ── Map ──────────────────────────────────────────────────────────── */}
			<section className='py-10 px-6 bg-tint'>
				<div className='max-w-7xl mx-auto'>
					<AnimatedSection>
						<MapPlaceholder />
					</AnimatedSection>
				</div>
			</section>

			{/* ── FAQ Strip ────────────────────────────────────────────────────── */}
			<section className='py-20 px-6 bg-canvas border-t border-border'>
				<div className='max-w-7xl mx-auto'>
					<AnimatedSection className='text-center mb-10'>
						<span className='gold-rule mx-auto' aria-hidden='true' />
						<span className='eyebrow'>
							<span className='eyebrow-star' aria-hidden='true'>
								✦
							</span>
							FAQ
						</span>
						<h2
							className='mt-6 font-display font-bold text-ink'
							style={{
								fontSize: 'clamp(22px, 3vw, 32px)',
								lineHeight: 1.15,
								letterSpacing: '-0.02em',
							}}
						>
							Common Questions
						</h2>
						<p className='mt-2 text-sm text-muted-foreground max-w-xs mx-auto'>
							Anything else? Send us a message — we reply within 24 hours.
						</p>
					</AnimatedSection>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
						{faqs.map((faq, i) => (
							<AnimatedSection key={faq.q} delay={i * 0.08}>
								<div className='card-royal h-full p-6'>
									<p className='font-display font-semibold text-ink text-sm leading-snug mb-3'>
										{faq.q}
									</p>
									<p className='text-sm text-muted-foreground leading-relaxed'>
										{faq.a}
									</p>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
