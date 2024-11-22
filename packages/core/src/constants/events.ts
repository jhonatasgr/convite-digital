import type { IEvent } from '../event'
import { Id } from '../shared'

export const events: IEvent[] = [
	{
		id: 'e440bc4e-32f8-4fcc-9a24-de4242093e5f',
		slug: 'evento-fullstack',
		password: 'senha123',
		name: 'Evento de Desenvolvimento Fullstack',
		date: new Date('2024-12-01T10:00:00Z'),
		location: 'São Paulo, SP',
		description:
			'Um evento completo para aprender desenvolvimento fullstack do zero.',
		image:
			'https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk',
		imageBackground:
			'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
		expectedAudience: 200,
		guests: [
			{
				id: '1760156e-4eb6-4b91-bb9d-18220c5d1e18',
				name: 'Alice Silva',
				email: 'alice@example.com',
				confirmed: true,
				hasACompanions: true,
				amountOfCompanions: 1,
			},
			{
				id: '83d1faf9-e96e-4280-9362-611d533fff9c',
				name: 'Carlos Pereira',
				email: 'carlos@example.com',
				confirmed: false,
				hasACompanions: false,
				amountOfCompanions: 0,
			},
			{
				id: '6d06ad25-5fe4-42e9-b99f-0fae413a02f0',
				name: 'Beatriz Lima',
				email: 'beatriz@example.com',
				confirmed: false,
				hasACompanions: true,
				amountOfCompanions: 2,
			},
		],
	},
	{
		id: '78f8cefb-9948-482b-9406-874149bb1df0',
		slug: 'evento-js-avancado',
		password: 'js2024',
		name: 'Workshop Avançado de JavaScript',
		date: new Date('2024-11-20T15:00:00Z'),
		location: 'Rio de Janeiro, RJ',
		description: 'Um workshop avançado para programadores JavaScript.',
		image:
			'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
		imageBackground:
			'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
		expectedAudience: 100,
		guests: [
			{
				id: 'd4a905f6-a8d5-4715-a291-d1661c04779f',
				name: 'Eduardo Santos',
				email: 'eduardo@example.com',
				confirmed: true,
				hasACompanions: false,
				amountOfCompanions: 0,
			},
			{
				id: 'e96f6d28-c24e-49ba-8448-da06a8b6c300',
				name: 'Fernanda Costa',
				email: 'fernanda@example.com',
				confirmed: true,
				hasACompanions: true,
				amountOfCompanions: 1,
			},
		],
	},
	{
		id: '24b2ecf8-b93b-4c48-9573-5f7a50c6bc8d',
		slug: 'evento-dev-frontend',
		password: 'front123',
		name: 'Bootcamp de Desenvolvimento Frontend',
		date: new Date('2024-11-15T09:00:00Z'),
		location: 'Belo Horizonte, MG',
		description: 'Aprenda a criar interfaces incríveis e responsivas.',
		image:
			'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
		imageBackground:
			'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
		expectedAudience: 150,
		guests: [
			{
				id: '73366c1d-e41f-4b05-bdcd-c3fa122a2806',
				name: 'Gabriela Rocha',
				email: 'gabriela@example.com',
				confirmed: true,
				hasACompanions: true,
				amountOfCompanions: 1,
			},
			{
				id: 'e1563e00-fe19-4221-a455-b1faebdc0bb2',
				name: 'Hugo Nogueira',
				email: 'hugo@example.com',
				confirmed: false,
				hasACompanions: false,
				amountOfCompanions: 0,
			},
			{
				id: '01ca94df-5420-4ef0-bb63-3732f125494e',
				name: 'Isabela Martins',
				email: 'isabela@example.com',
				confirmed: true,
				hasACompanions: false,
				amountOfCompanions: 0,
			},
		],
	},
	{
		id: '1c7a4d7e-fe4b-4512-af1a-e27eb188a2ef',
		slug: 'casamento-alberto-marina',
		password: 'casamento2024',
		name: 'Casamento do Alberto e Marina',
		date: new Date('2024-11-25T16:00:00Z'),
		location: 'Florianópolis, SC',
		description:
			'Celebração do casamento de Alberto e Marina com amigos e familiares.',
		image:
			'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
		imageBackground:
			'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
		expectedAudience: 150,
		guests: [
			{
				id: '7ad8c3c4-f9dd-4dfc-8658-b8571c6a73a4',
				name: 'Bruno Cardoso',
				email: 'bruno@example.com',
				confirmed: true,
				hasACompanions: true,
				amountOfCompanions: 1,
			},
			{
				id: '1719b3ca-51b0-404f-aa50-05b6aaa16b49',
				name: 'Carla Mendes',
				email: 'carla@example.com',
				confirmed: true,
				hasACompanions: false,
				amountOfCompanions: 0,
			},
		],
	},
	{
		id: 'ab6291d4-4874-4de1-85ab-d8f7c348dc0e',
		slug: 'aniversario-joao',
		password: 'joao2024',
		name: 'Aniversário do João - 30 Anos',
		date: new Date('2024-12-05T18:00:00Z'),
		location: 'Curitiba, PR',
		description:
			'Comemoração dos 30 anos de João com amigos próximos e familiares.',
		image:
			'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
		imageBackground:
			'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
		expectedAudience: 80,
		guests: [
			{
				id: '9e74f72f-c7eb-4dc9-a1a4-10db7e0b5285',
				name: 'Maria Souza',
				email: 'maria@example.com',
				confirmed: true,
				hasACompanions: true,
				amountOfCompanions: 2,
			},
			{
				id: '37b41192-aed0-463f-8e01-1617f73e37e8',
				name: 'José Almeida',
				email: 'jose@example.com',
				confirmed: false,
				hasACompanions: false,
				amountOfCompanions: 0,
			},
		],
	},
	{
		id: '987b7c03-dae4-4616-a2ea-b3c779f36ba0',
		slug: 'inauguracao-loja-estrela',
		password: 'estrela2024',
		name: 'Inauguração da Loja Estrela',
		date: new Date('2024-12-10T09:00:00Z'),
		location: 'Porto Alegre, RS',
		description:
			'Evento de inauguração da nova loja Estrela com brindes e promoções.',
		image:
			'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
		imageBackground:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
		expectedAudience: 300,
		guests: [
			{
				id: '9cb870f0-1957-4710-bb70-4d244de132e1',
				name: 'Cláudia Lima',
				email: 'claudia@example.com',
				confirmed: true,
				hasACompanions: true,
				amountOfCompanions: 3,
			},
			{
				id: '03be505c-03ba-4b97-8d90-a80f01640c5c',
				name: 'Ricardo Barbosa',
				email: 'ricardo@example.com',
				confirmed: true,
				hasACompanions: false,
				amountOfCompanions: 0,
			},
		],
	},
	{
		id: '27f1b312-504c-419d-977b-b4930794cbbe',
		slug: 'reuniao-familia-oliveira',
		password: 'familia2024',
		name: 'Reunião da Família Oliveira',
		date: new Date('2024-12-15T12:00:00Z'),
		location: 'Salvador, BA',
		description: 'Reunião de fim de ano da família Oliveira.',
		image:
			'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
		imageBackground:
			'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
		expectedAudience: 50,
		guests: [
			{
				id: '8c941bc4-4389-4ec4-a3a6-e3f784ab3158',
				name: 'Thiago Oliveira',
				email: 'thiago@example.com',
				confirmed: true,
				hasACompanions: true,
				amountOfCompanions: 4,
			},
			{
				id: 'ea9a0f6a-3bd1-428a-abcd-8a95e0916b6a',
				name: 'Letícia Oliveira',
				email: 'leticia@example.com',
				confirmed: true,
				hasACompanions: false,
				amountOfCompanions: 0,
			},
		],
	},
]
