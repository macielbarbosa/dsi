var USER_IMG = 'https://www.limestone.edu/sites/default/files/styles/medium/public/user.png?itok=d8xg4G1G'

Vue.component('card', {
	props: {
		dados: Object
	},
	template: `	
		<div class="card">
			<a :href="dados.href">
			  <img class="card-img-top" :src="dados.img" :alt="dados.descricao">
			  <div class="card-body">
			    <h5 class="card-title">{{dados.nome}}</h5>
			    <p ng-if="dados.descricao" class="card-text">{{dados.descricao}}</p>
	  		</div>
			</a>
		</div>
	`
})

var app = new Vue({
	el: '#cards',
	data: function () {
		return {
			maciel: {
				nome: 'Maciel Barbosa',
				href: 'http://macielbarbosa.hostei.com',
				img: 'http://macielbarbosa.hostei.com/images/maciel.jpg',
				descricao: 'Meu site pessoal'
			},
			pessoas: [
				{
					nome: 'Andrielson Santos',
					href: 'https://andrielsonsantos.github.io',
					img: 'https://andrielsonsantos.github.io/imagens/eu.jpg'
				},
				{
					nome: 'João Manoel Correia Ribeiro',
					href: 'https://joaomcr.github.io',
					img: 'https://joaomcr.github.io/Imagens/fotoperfil.jpg'
				},
				{
					nome: 'Júlio Cesar',
					href: 'https://juliobandeira97.github.io/',
					img: USER_IMG
				},
				{
					nome: 'Sérgio Pires Barra',
					href: 'https://sergiopiresbarra.github.io/',
					img: 'https://sergiopiresbarra.github.io/imagens/sergiopb.jpg'
				},
				{
					nome: 'Victor Kaillo',
					href: 'https://victorkaillo.github.io',
					img: 'https://victorkaillo.github.io/img/portfolio/fullsize/1.jpg'
				},
				{
					nome: 'Arthur Balboa',
					href: 'https://arthzzz.github.io/',
					img: 'https://arthzzz.github.io/qq.jpg'
				},
				{
					nome: 'Matheus Oliveira de Freitas',
					href: 'https://mofreitas.github.io',
					img: 'https://mofreitas.github.io/imagens/Perfil_academico.jpg'
				},
				{
					nome: 'Francisco Lucas',
					href: 'https://lucasvn.github.io/',
					img: 'https://lucasvn.github.io/img/profile.png'
				},
				{
					nome: 'Hilton Sabino',
					href: 'https://hiltonjr.github.io/Projeto1.html',
					img: 'https://hiltonjr.github.io/hiltonjr.github.io/imag/20171215_111213.jpg'
				},
				{
					nome: 'Marcelo Filgueira',
					href: 'https://marcelofilgueira.github.io/lazer.html',
					img: USER_IMG
				},
				{
					nome: 'Ana Beatriz Marinho',
					href: 'https://ana-beatriz-marinho.github.io/',
					img: USER_IMG
				},
				{
					nome: 'Felipe G. Ren',
					href: 'http://falemao.github.io/index.html',
					img: 'http://falemao.github.io/imagens/ren1.png'
				},
				{
					nome: 'Jefferson Denilson',
					href: 'https://jeffersondenilson.github.io',
					img: 'https://jeffersondenilson.github.io/imagens/1.jpg'
				},
				{
					nome: 'Amadeu P. Barbosa',
					href: 'https://amadeupb36.github.io',
					img: USER_IMG
				},
				{
					nome: 'Carlos Antonio',
					href: 'https://carlosmirandaf.github.io/carlosmirandaf.github.io/projeto01',
					img: 'https://carlosmirandaf.github.io/carlosmirandaf.github.io/projeto01/imagens/carlos.jpg'
				},
				{
					nome: 'Glauber Carvalho',
					href: 'https://glauberc.github.io',
					img: 'https://glauberc.github.io/images/img-ft-minha.jpg'
				},
				{
					nome: 'Magnus Freire',
					href: 'https://magnusbrigido.github.io',
					img: 'https://magnusbrigido.github.io/imagem/foto.jpg'
				},
				{
					nome: 'Maurício Lima',
					href: 'https://mauriciothiago.github.io',
					img: 'https://mauriciothiago.github.io/img/perfil.jpg'
				},
				{
					nome: 'Lucas Siqueira',
					href: 'https://lucasiqueira95.github.io',
					img: 'https://lucasiqueira95.github.io/imagens/2018.jpg'
				},
				{
					nome: 'Rafael Arruda',
					href: 'https://rafarneves.github.io',
					img: 'https://rafarneves.github.io/Imagens/eu.jpg'
				},
				{
					nome: 'José Nicolas',
					href: 'https://josenicolasfs.github.io/projeto01',
					img: 'https://josenicolasfs.github.io/projeto01/imagens/FOTO-266.jpg'
				},
				{
					nome: 'Vinnicius Leandro',
					href: 'https://vinniciusl.github.io/',
					img: 'https://vinniciusl.github.io/imagens/mine.jpg'
				},
				{
					nome: 'Sarah A S Penha',
					href: 'https://sarahamelia34.github.io/',
					img: 'https://sarahamelia34.github.io/Sheldon%20COOPER%20-%20Physicien%20surdou%C3%A9%20et%20Geek%20qualifi%C3%A9_files/avatar.jpg'
				},
				{
					nome: 'Artur Manoel',
					href: 'https://arturdasilveira.github.io/',
					img: 'https://arturdasilveira.github.io/images/foto.jpg'
				},
				{
					nome: 'Barbara Schlottfeldt',
					href: 'https://babschlott.github.io/',
					img: 'https://babschlott.github.io/images/perfilformal.jpg'
				},
				{
					nome: 'Alek Tobias',
					href: 'https://alektobias.github.io/',
					img: 'https://alektobias.github.io/Imagens/12004720_10207023030766123_4282344345929623081_n.jpg'
				},
				{
					nome: 'Rafael Lins',
					href: 'https://rafaellinsbezerra.github.io/',
					img: 'https://rafaellinsbezerra.github.io/img/foto.jpg'
				}
			]
		}
	},
	template: `
		<div class="f-column">
			<div class="row center">
				<card :dados="maciel"></card>
			</div>
			<br>
			<h2 class="center">Sites dos membros da turma</h2>
			<div class="row center">
				<card v-for="pessoa in pessoas" :dados="pessoa"></card>
			</div>
		</div>
		`
})