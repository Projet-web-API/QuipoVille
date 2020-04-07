<template>
  <div class="sidebar"
       :data="backgroundColor">
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo">
        <a href=""
           aria-label="sidebar mini logo"
           class="simple-text logo-mini">
          <div class=""
               :class="{'logo-img-rtl': $rtl.isRTL}">
            <img
              src="../../../public/img/logoQuipoVille.png"
              alt="">
          </div>
        </a>
        <a href="" class="simple-text logo-normal">
          {{title}}
        </a>
      </div>
      <slot>
      <div class="boxSidebar">
        <select id="bouton-select-ville" class="btn dropdown-toggle" name="city">
            <option name="Le Mans" >Le Mans</option>
            <option name="Paris" >Paris</option>
            <option name="Nantes" >Nantes</option>
            <option name="Lyon" >Lyon</option>
            <option name="Lille" >Lille</option>
        </select>
        <button id="bouton-langue" class="btn" >
          Valider
        </button>
        </div>
      </slot>
      <slot>
      <div class="boxSidebar">
        <select id="bouton-select-langue" class="btn dropdown-toggle" name="city">
            <option name="en">English</option>
            <option name="sp">Espanol</option>
            <option selected name="fr">Français</option>
        </select>
                <button id="bouton-ville" class="btn" v-on:click="changeVille()">
          Valider
        </button>
        </div>
      </slot>
      <slot>
      <button id="bouton-contact" class="btn">
       <a href="https://twitter.com/QuipoV" style="color: white;">Nous contacter</a>
      </button>
      </slot>
      <slot >
        <p id="apropos">Ce site à été réalisé dans le cadre du projet de Licence 3 de la faculté d'informatique de Le Mans Université</p>
      </slot>
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot name="links">
          <sidebar-link v-for="(link,index) in sidebarLinks"
                        :key="index"
                        :to="link.path"
                        :name="link.name"
                        :icon="link.icon">
          </sidebar-link>
        </slot>
      </ul>
    </div>
  </div>
</template>

<script>
  import SidebarLink from "./SidebarLink";

  export default {
    props: {
      title: {
        type: String,
        default: "QuipoVille"
      },
      backgroundColor: {
        type: String,
        default: "vue"
      },
      activeColor: {
        type: String,
        default: "success",
        validator: value => {
          let acceptedValues = [
            "primary",
            "info",
            "success",
            "warning",
            "danger"
          ];
          return acceptedValues.indexOf(value) !== -1;
        }
      },
      sidebarLinks: {
        type: Array,
        default: () => []
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        autoClose: this.autoClose,
        addLink: this.addLink,
        removeLink: this.removeLink
      };
    },
    components: {
      SidebarLink
    },
    computed: {
      /**
       * Styles to animate the arrow near the current active sidebar link
       * @returns {{transform: string}}
       */
      arrowMovePx() {
        return this.linkHeight * this.activeLinkIndex;
      },
      shortTitle() {
        return this.title.split(' ')
          .map(word => word.charAt(0))
          .join('').toUpperCase();
      }
    },
    data() {
      return {
        btnville: getElementById("bouton-ville"),
        linkHeight: 65,
        activeLinkIndex: 0,
        windowWidth: 0,
        isWindows: false,
        hasAutoHeight: false,
        links: []
      };
    },
    methods: {
      changeVille(){
          this.$emit("ville-changée", lanceTwitter());
          //Dashboard.lanceTwitter();
      },
      findActiveLink() {
        this.links.forEach((link, index) => {
          if (link.isActive()) {
            this.activeLinkIndex = index;
          }
        });
      },
      addLink(link) {
        const index = this.$slots.links.indexOf(link.$vnode);
        this.links.splice(index, 0, link);
      },
      removeLink(link) {
        const index = this.links.indexOf(link);
        if (index > -1) {
          this.links.splice(index, 1);
        }
      },
    },
    mounted() {
      //btnville.addEventListener('click',say("AH oui oui"))
      this.$watch("$route", this.findActiveLink, {
        immediate: true
      });
    }
  };
</script>
<style>
  #bouton-select-ville{
    margin-left: 15%;
    margin-top: 5%;
    max-width: 75%;
    text-align: left;
  }

  #bouton-select-langue{
    margin-left: 15%;
    margin-top: 5%;
    max-width: 75%;
    text-align: left;
  }

  #bouton-contact{
    margin-left: 15%;
    margin-top: 15%;
    max-width: 75%;
    text-align: left;
  }

  #bouton-ville{
    margin-left: 15%;
    margin-top: 5%;
    max-width: 75%;
    text-align: left;
  }
  #bouton-langue{
    margin-left: 15%;
    margin-top: 5%;
    max-width: 75%;
    text-align: left;
  }
  #apropos{
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 90%;
    text-align: left;
    padding: 5%;
    border: solid;
  }

  .boxSidebar{
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    color: white;
    border: solid;
  }

</style>