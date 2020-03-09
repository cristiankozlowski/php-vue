const base_url = "https://www.localhost/gerenciador-de-noticias";

Vue.component("list-news", {
  data() {
    return {
      newsContent: {
        id: "",
        titulo: "",
        conteudo: ""
      },
      allNews: [],
      showNewToUpdate: false,
      showNewToCreate: false
    };
  },
  methods: {
    close_update() {
      this.showNewToUpdate = false;
      this.newsContent = { id: "", titulo: "", conteudo: "" };
    },
    close_create() {
      this.showNewToCreate = false;
      this.newsContent = { id: "", titulo: "", conteudo: "" };
    },
    loadNews() {
      axios.get(`${base_url}/api`).then(response => {
        this.allNews = response.data;
      });
    },
    createNew() {
      axios.post(
        `${base_url}/api/create/${this.newsContent.titulo}/${this.newsContent.conteudo}`
      );

      this.showNewToCreate = false;
      this.newsContent = { id: "", titulo: "", conteudo: "" };

      setTimeout(() => {
        this.loadNews();
      }, 1000);
    },
    gotoUpdateNew(item) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      this.showNewToCreate = false;
      this.showNewToUpdate = true;
      this.newsContent = item;
    },
    updateNew(newsContent) {
      axios.put(
        `${base_url}/api/update/${newsContent.id}/${newsContent.titulo}/${newsContent.conteudo}`
      );

      this.showNewToUpdate = false;
      this.newsContent = { id: "", titulo: "", conteudo: "" };
    },
    deleteNew(id) {
      axios.delete(`${base_url}/api/${id}`);

      this.loadNews();
    },
    xmlGenerator() {
      axios.get(`${base_url}/api/xml-generator`);
    }
  },
  created() {
    this.loadNews();
  },
  template: `<div class="container">
              <section>
              <div class="news_create" v-if="showNewToCreate">
              <div class="form_create">
                <div class="close_modal" @click="close_create">X</div>
                    <label>Título</label>
                    <input type="text" v-model="newsContent.titulo">
                    <label>Conteúdo</label>
                    <textarea v-model="newsContent.conteudo"></textarea>
                    <label>Foto</label>
                    <input type="file" />
                    <button class="btn" @click="createNew()">Incluir Notícia</button>
                  </div>
                </div>
                <div v-else>
                  <button class="btn" @click="showNewToCreate = true">Publicar notícia</button>
                  <a href="${base_url}/api/xml-generator" target="_blank" class="btn">Gerar XML</a>
                  <a href="${base_url}/api/json-generator" target="_blank" class="btn" @click="">Gerar JSON</a>
                </div>
              </section>
              <section class="news_update" v-if="showNewToUpdate">
                <div class="close_modal" @click="close_update">X</div>
                <div class="form_update">
                  <label>Título</label>
                  <input type="text" v-model="newsContent.titulo">
                  <label>Conteúdo</label>
                  <textarea name="conteudo" v-model="newsContent.conteudo"></textarea>
                  <button class="btn" @click="updateNew(newsContent)">Atualizar Notícia</button>
                </div>
              </section>
              <section>
                <div class="news_items" v-for="item in allNews" :key="item.id">
                  <h1>{{item.titulo}}</h1>
                  <div class="container_content">                  
                    <img width="250" height="auto" :src="item.imagem" :alt="item.imagem" />
                    <p class="news_content">{{item.conteudo}}</p>
                  </div>
                  <button class="btn" @click="gotoUpdateNew(item)">Atualizar</button>
                  <button class="btn" @click="deleteNew(item.id)">Excluir</button>
                </div>
              </section>
            </div>`
});

new Vue({ el: "#app" });
