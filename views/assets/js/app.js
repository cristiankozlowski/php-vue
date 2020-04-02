const base_url = "https://www.localhost/gerenciador-de-noticias";

Vue.component("list-news", {
  data() {
    return {
      abre_modal: false,
      newsContent: {
        id: "",
        titulo: "",
        conteudo: ""
      },
      allNews: [],
      showNewToUpdate: false,
      showNewToCreate: false,
      showAlert: false,
      alert: "",
      typeAlert: "message error"
    };
  },
  methods: {
    closeModal({ target, currentTarget }) {
      if (target === currentTarget) {
        this.showNewToUpdate = false;
        this.showNewToCreate = false;
        this.newsContent = { id: "", titulo: "", conteudo: "" };
      }
    },
    close_update() {
      this.showNewToUpdate = false;
      this.newsContent = { id: "", titulo: "", conteudo: "" };
    },
    close_create() {
      this.showNewToCreate = false;
      this.newsContent = { id: "", titulo: "", conteudo: "" };
    },
    open_create() {
      this.showNewToCreate = true;
    },
    loadNews() {
      axios.get(`${base_url}/api`).then(response => {
        this.allNews = response.data;
      });
    },
    createNew() {
      axios.post(
        `${base_url}/api/create`,
        `titulo=${this.newsContent.titulo}&conteudo=${this.newsContent.conteudo}`
      );

      this.showNewToCreate = false;
      this.newsContent = { id: "", titulo: "", conteudo: "" };

      this.alert = "Notícia criada com sucesso";
      this.typeAlert = "alert success";
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 4000);

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
        `${base_url}/api/update/${newsContent.id}`,
        `titulo=${newsContent.titulo}&conteudo=${newsContent.conteudo}`
      );

      this.showNewToUpdate = false;
      this.newsContent = { id: "", titulo: "", conteudo: "" };
      this.alert = "Notícia atualizada com sucesso";
      this.typeAlert = "alert success";
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 4000);
    },
    deleteNew(id) {
      axios.delete(`${base_url}/api/${id}`);

      setTimeout(() => {
        this.loadNews();
      }, 500);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      this.alert = "Notícia deletada com sucesso";
      this.typeAlert = "alert success";
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 4000);
    },
    xmlGenerator() {
      axios.get(`${base_url}/api/xml-generator`);
    }
  },
  created() {
    this.loadNews();
  },
  template: `<div class="container">
              <div :class="typeAlert" v-if="showAlert">
                <p>{{alert}}</p>
              </div>
              <button class="btn" @click="open_create">Publicar notícia</button>
              <a href="${base_url}/api/xml-generator" target="_blank" class="btn">Gerar XML</a>
              <a href="${base_url}/api/json-generator" target="_blank" class="btn" @click="">Gerar JSON</a>
              <section class="news_create" v-if="showNewToCreate" @click="closeModal">
                <div class="form_create">
                  <div class="close_modal" @click="close_create">X</div>
                  <label>Título</label>
                  <input type="text" v-model="newsContent.titulo">
                  <label>Conteúdo</label>
                  <textarea rows="8" cols="65" v-model="newsContent.conteudo"></textarea>
                  <label>Foto</label>
                  <input type="file" />
                  <button class="btn" @click="createNew()">Incluir Notícia</button>
                </div>
              </section>
              <section class="news_update" v-if="showNewToUpdate" @click="closeModal">
                <div class="form_update">
                  <div class="close_modal" @click="close_update">X</div>
                  <label>Título</label>
                  <input type="text" v-model="newsContent.titulo">
                  <label>Conteúdo</label>
                  <textarea name="conteudo" rows="15" cols="68" v-model="newsContent.conteudo"></textarea>
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
