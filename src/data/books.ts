export type BookMeta = {
	number: string;
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	sidebarLabel: string;
};

/** Study order. Sidebar, home cards, and progress all read this list. */
export const books: BookMeta[] = [
	{
		number: '01',
		slug: '01-terminal',
		title: 'الـ Terminal',
		subtitle: 'المرجع الشخصي (إصدار macOS)',
		description:
			'من أول ضغطة Enter لحد السكربتات والصلاحيات، على macOS و zsh، ومعاه المقابل على Linux.',
		sidebarLabel: '01 · الـ Terminal',
	},
	{
		number: '02',
		slug: '02-git',
		title: 'Git و GitHub',
		subtitle: 'من الصفر',
		description:
			'من فكرة الـ Version Control لحد الشغل مع فريق على GitHub وأدوات الـ AI من غير ما تبوّظ حاجة.',
		sidebarLabel: '02 · Git و GitHub',
	},
	{
		number: '03',
		slug: '03-web',
		title: 'الإنترنت والويب و DevTools',
		subtitle: 'دليل المذاكرة',
		description:
			'الإنترنت اتعمل ليه، والصفحة بتوصلك إزاي، و HTTP والأمان، وبعدين DevTools عشان تمسك أي مشكلة.',
		sidebarLabel: '03 · الإنترنت والويب',
	},
	{
		number: '04',
		slug: '04-python',
		title: 'Python for AI',
		subtitle: 'دليل المذاكرة',
		description:
			'تشغّل وتقرا Python على قد ما تحتاجه، وبعدين الموديلات والـ SDKs وسكربتات الـ AI.',
		sidebarLabel: '04 · Python',
	},
	{
		number: '05',
		slug: '05-apis',
		title: 'APIs و JSON',
		subtitle: 'دليل المذاكرة',
		description:
			'تفهم الطلب، تشتغل مع JSON، تكلّم APIs حقيقية، وبعدين تصمّم REST و OpenAPI.',
		sidebarLabel: '05 · APIs و JSON',
	},
	{
		number: '06',
		slug: '06-frontend',
		title: 'عالم الفرونت إند',
		subtitle: 'دليل المذاكرة',
		description:
			'من HTML و CSS لحد ليه الـ Frameworks اتعملت، و npm و Vite و TypeScript وخريطة الطريق.',
		sidebarLabel: '06 · الفرونت إند',
	},
	{
		number: '07',
		slug: '07-docker',
		title: 'Docker',
		subtitle: 'دليل المذاكرة',
		description: 'المشكلة الأول، وبعدين Images جاهزة، وبعدها تبني Image بتاعتك وتشغّل المشروع.',
		sidebarLabel: '07 · Docker',
	},
	{
		number: '08',
		slug: '08-kubernetes',
		title: 'Kubernetes',
		subtitle: 'دليل المذاكرة',
		description:
			'من المشكلة والـ Pod لحد الـ Workloads والشبكات والبيانات والتشغيل الاحترافي.',
		sidebarLabel: '08 · Kubernetes',
	},
];
