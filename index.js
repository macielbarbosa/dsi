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
				href: 'pessoal/index.html',
				img: './pessoal/images/maciel.jpg',
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
					img: 'https://juliobandeira97.github.io/'
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