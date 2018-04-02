<template>
<div>
    <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#!" v-if="isLogoScrolled">
            <img class="image-brand" src="https://hayevento.com/assets/menu/logo_grande.png" alt="BV">
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-nav-item>Apps</b-nav-item>
                    <b-nav-item>Ayuda</b-nav-item>
                    <b-nav-item>Iniciar Sesión</b-nav-item>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Publica tu evento</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

    <b-jumbotron class="main-jumbotron" bg-variant="dark" text-variant="white" fluid>
        <template slot="header">
            <img class="image-brand-header" src="https://hayevento.com/assets/menu/logo_grande.png" alt="Evento">
        </template>
        <template slot="lead">
            <h2 class="image-brand-lead">HayEvento: Eventos, Conciertos y Festivales en Medellín</h2>
        </template>
    </b-jumbotron>
</div>
</template>

<script>
export default {
    name: "Header",
    data: () => {
        return {
            isLogoScrolled: false
        }
    },
    methods: {

    }
}
</script>

<style>
.image-brand {
    width: 40%;
}
.image-brand-header {
    padding-left: 350px;
    max-width: 100%;
    padding-top: 15px;
}
.image-brand-lead {
    padding-left: 200px;
}
.main-jumbotron {
    margin-top: -40px;
}
</style>
