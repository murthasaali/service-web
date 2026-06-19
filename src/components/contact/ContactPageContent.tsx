'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import {
	AlertCircle,
	ArrowRight,
	CheckCircle,
	Clock,
	Mail,
	MessageSquare,
	Phone,
} from 'lucide-react';
import ShaderBackground from '@/components/ui/shader-background';
import { StarButton } from '@/components/ui/star-button';
import { TextReveal } from '@/components/ui/cascade-text';

const serviceOptions = [
	'Web Development',
	'Custom Software Development',
	'Mobile App Development',
	'Digital Marketing',
	'Hosting & Infrastructure',
	'Automation',
	'Customer Experience Management',
	'IT Consulting & IT Services',
];

const budgetOptions = [
	'Under 5,000',
	'5,000 - 15,000',
	'15,000 - 50,000',
	'50,000 - 100,000',
	'100,000+',
	'Not sure yet',
];

const contactDetails = [
	{
		icon: Mail,
		label: 'Email',
		value: 'hello@aibizmod.com',
		href: 'mailto:hello@aibizmod.com',
	},
	{
		icon: Phone,
		label: 'Phone',
		value: '+44 (0) 20 7946 0958',
		href: 'tel:+442079460958',
	},
	{
		icon: Clock,
		label: 'Response time',
		value: 'Within 24 business hours',
		href: undefined,
	},
] as const;

interface FormData {
	fullName: string;
	email: string;
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

function validate(data: FormData): FormErrors {
	const errors: FormErrors = {};

	if (!data.fullName.trim() || data.fullName.trim().length < 2) {
		errors.fullName = 'Please enter your full name.';
	}

	if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
		errors.email = 'Please enter a valid email address.';
	}

	if (!data.service) errors.service = 'Please select a service.';
	if (!data.budget) errors.budget = 'Please select a budget range.';

	if (!data.message.trim() || data.message.trim().length < 20) {
		errors.message = 'Please add a short project description.';
	}

	return errors;
}

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

export default function ContactPageContent() {
	const uid = useId();
	const [formData, setFormData] = useState<FormData>({
		fullName: '',
		email: '',
		company: '',
		service: '',
		budget: '',
		message: '',
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		event: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const validationErrors = validate(formData);

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			document
				.getElementById(`${uid}-${Object.keys(validationErrors)[0]}`)
				?.focus();
			return;
		}

		setIsSubmitting(true);
		await new Promise<void>((resolve) => setTimeout(resolve, 700));
		setIsSubmitting(false);
		setSubmitted(true);
	};

	const handleReset = () => {
		setSubmitted(false);
		setErrors({});
		setFormData({
			fullName: '',
			email: '',
			company: '',
			service: '',
			budget: '',
			message: '',
		});
	};

	const inputBase =
		'w-full rounded-2xl border bg-white/90 px-4 py-3 text-sm text-[#0F172A] placeholder:text-slate-400 shadow-[0_10px_28px_rgba(59,130,246,0.05)] outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20';
	const inputNormal = `${inputBase} border-cyan-100`;
	const inputError = `${inputBase} border-red-300 bg-red-50/60 focus:border-red-400 focus:ring-red-200`;
	const cls = (field: keyof FormErrors) =>
		errors[field] ? inputError : inputNormal;

	const firstName = formData.fullName.trim().split(' ')[0];

	return (
		<section className='relative isolate min-h-screen overflow-hidden bg-white px-6 pb-20 pt-32 md:pt-36'>
			<ShaderBackground className='absolute inset-0 z-0 h-full w-full opacity-80' />

			<div
				className='pointer-events-none absolute left-1/2 top-28 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl'
				aria-hidden='true'
			/>

			<div className='relative z-10 mx-auto max-w-6xl'>
				<div className='mx-auto max-w-3xl text-center'>
					<span className='inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 shadow-[0_12px_35px_rgba(59,130,246,0.10)]'>
						<MessageSquare size={14} aria-hidden='true' />
						Contact
					</span>
					<h1
						className='mt-7 font-display font-thin text-[#0F172A] text-balance'
						style={{ fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.02 }}
					>
						Let&apos;s build something{' '}
						<TextReveal
							text='connected'
							as='span'
							fontSize='inherit'
							color='#0F172A'
							hoverColor='#0891B2'
							className='font-normal normal-case tracking-tight'
							style={{ padding: 0 }}
						/>
					</h1>
					<p className='mx-auto mt-6 max-w-2xl rounded-2xl border border-white/70 bg-white/85 px-6 py-4 text-base leading-8 text-slate-600 shadow-[0_18px_55px_rgba(59,130,246,0.12)] md:text-lg'>
						Tell us what you are planning. We will help shape the right next
						step for your website, app, automation, or cloud project.
					</p>
				</div>

				<div className='mt-14 grid gap-6 lg:grid-cols-[1fr_0.62fr] lg:items-start'>
					<div className='rounded-[28px] border border-cyan-100/80 bg-white/88 p-5 shadow-[0_22px_70px_rgba(8,145,178,0.12)] md:p-8'>
						{submitted ? (
							<div className='flex min-h-[420px] flex-col items-center justify-center text-center'>
								<div className='mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700'>
									<CheckCircle size={32} aria-hidden='true' />
								</div>
								<h2 className='font-display text-2xl font-semibold text-[#0F172A]'>
									Message sent
								</h2>
								<p className='mt-3 max-w-sm text-sm leading-7 text-slate-600'>
									Thanks{firstName ? `, ${firstName}` : ''}. We have your
									message and will reply within 24 business hours.
								</p>
								<button
									onClick={handleReset}
									className='mt-8 text-sm font-semibold text-cyan-700 underline-offset-4 hover:underline'
								>
									Send another message
								</button>
							</div>
						) : (
							<form
								onSubmit={handleSubmit}
								noValidate
								aria-label='Contact form'
								className='space-y-5'
							>
								<div className='grid gap-5 sm:grid-cols-2'>
									<div>
										<label
											htmlFor={`${uid}-fullName`}
											className='mb-1.5 block text-sm font-semibold text-[#0F172A]'
										>
											Full name
										</label>
										<input
											id={`${uid}-fullName`}
											name='fullName'
											type='text'
											autoComplete='name'
											placeholder='Jane Smith'
											value={formData.fullName}
											onChange={handleChange}
											aria-invalid={!!errors.fullName}
											aria-describedby={
												errors.fullName ? `${uid}-fullName-error` : undefined
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
											className='mb-1.5 block text-sm font-semibold text-[#0F172A]'
										>
											Email
										</label>
										<input
											id={`${uid}-email`}
											name='email'
											type='email'
											autoComplete='email'
											placeholder='jane@company.com'
											value={formData.email}
											onChange={handleChange}
											aria-invalid={!!errors.email}
											aria-describedby={
												errors.email ? `${uid}-email-error` : undefined
											}
											className={cls('email')}
										/>
										{errors.email && (
											<FieldError id={`${uid}-email-error`} message={errors.email} />
										)}
									</div>
								</div>

								<div className='grid gap-5 sm:grid-cols-2'>
									<div>
										<label
											htmlFor={`${uid}-service`}
											className='mb-1.5 block text-sm font-semibold text-[#0F172A]'
										>
											Service
										</label>
										<select
											id={`${uid}-service`}
											name='service'
											value={formData.service}
											onChange={handleChange}
											aria-invalid={!!errors.service}
											aria-describedby={
												errors.service ? `${uid}-service-error` : undefined
											}
											className={cls('service')}
										>
											<option value=''>Select a service</option>
											{serviceOptions.map((service) => (
												<option key={service} value={service}>
													{service}
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

									<div>
										<label
											htmlFor={`${uid}-budget`}
											className='mb-1.5 block text-sm font-semibold text-[#0F172A]'
										>
											Budget
										</label>
										<select
											id={`${uid}-budget`}
											name='budget'
											value={formData.budget}
											onChange={handleChange}
											aria-invalid={!!errors.budget}
											aria-describedby={
												errors.budget ? `${uid}-budget-error` : undefined
											}
											className={cls('budget')}
										>
											<option value=''>Select a range</option>
											{budgetOptions.map((budget) => (
												<option key={budget} value={budget}>
													{budget}
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
								</div>

								<div>
									<label
										htmlFor={`${uid}-company`}
										className='mb-1.5 block text-sm font-semibold text-[#0F172A]'
									>
										Company{' '}
										<span className='font-normal text-slate-400'>(optional)</span>
									</label>
									<input
										id={`${uid}-company`}
										name='company'
										type='text'
										autoComplete='organization'
										placeholder='Company name'
										value={formData.company}
										onChange={handleChange}
										className={inputNormal}
									/>
								</div>

								<div>
									<label
										htmlFor={`${uid}-message`}
										className='mb-1.5 block text-sm font-semibold text-[#0F172A]'
									>
										Project details
									</label>
									<textarea
										id={`${uid}-message`}
										name='message'
										rows={5}
										placeholder='What are you building, improving, or automating?'
										value={formData.message}
										onChange={handleChange}
										aria-invalid={!!errors.message}
										aria-describedby={
											errors.message ? `${uid}-message-error` : undefined
										}
										className={`${cls('message')} min-h-[140px] resize-y`}
									/>
									{errors.message && (
										<FieldError
											id={`${uid}-message-error`}
											message={errors.message}
										/>
									)}
								</div>

								<div className='flex flex-col gap-3 pt-2 sm:flex-row sm:items-center'>
									<button
										type='submit'
										disabled={isSubmitting}
										className='disabled:cursor-not-allowed disabled:opacity-70'
									>
										<StarButton
											as='span'
											lightColor='#38bdf8'
											backgroundColor='#0f172a'
											className='h-12 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(6,182,212,0.55),0_0_4px_rgba(56,189,248,0.7)]'
										>
											{isSubmitting ? 'Sending...' : 'Send Message'}
											<ArrowRight size={16} aria-hidden='true' />
										</StarButton>
									</button>
									<p className='text-xs leading-5 text-slate-500'>
										No spam. Just a practical reply from the team.
									</p>
								</div>
							</form>
						)}
					</div>

					<aside className='rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_18px_55px_rgba(59,130,246,0.12)]'>
						<h2 className='font-display text-2xl font-semibold text-[#0F172A]'>
							Direct contact
						</h2>
						<p className='mt-3 text-sm leading-7 text-slate-600'>
							Prefer a shorter path? Reach us through any channel below and we
							will route you to the right person.
						</p>

						<ul className='mt-7 space-y-4'>
							{contactDetails.map(({ icon: Icon, label, value, href }) => (
								<li key={label} className='flex gap-4 rounded-2xl border border-cyan-100/80 bg-white/65 p-4'>
									<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700'>
										<Icon size={17} aria-hidden='true' />
									</div>
									<div>
										<p className='text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700'>
											{label}
										</p>
										{href ? (
											<a
												href={href}
												className='mt-1 block text-sm font-semibold text-[#0F172A] transition hover:text-cyan-700'
											>
												{value}
											</a>
										) : (
											<p className='mt-1 text-sm font-semibold text-[#0F172A]'>
												{value}
											</p>
										)}
									</div>
								</li>
							))}
						</ul>

						<div className='mt-6 rounded-2xl border border-cyan-100 bg-[#ECFEFF]/70 p-5'>
							<p className='text-sm font-semibold text-[#0F172A]'>
								What happens next?
							</p>
							<p className='mt-2 text-sm leading-7 text-slate-600'>
								We review your note, clarify goals, and suggest the simplest
								next step before any build work begins.
							</p>
							<Link
								href='/services'
								className='mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900'
							>
								View services
								<ArrowRight size={14} aria-hidden='true' />
							</Link>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
