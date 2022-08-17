<template lang="">
    <AppLayout>
        <template #header>
            <h2 class="text-center text-2xl font-bold leading-7 sm:text-3xl sm:truncate py-4 bg-blue-500 text-white">
                Agregar Contacto
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    
                    <form @submit.prevent="submit" class="mb-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                            <div class="grid grid-cols-1">
                                <label for="firstName" class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nombre</label>
                                <input type="text" id="firstName" v-model="contact.firstName"
                                    class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                            </div>
                            <div class="grid grid-cols-1">
                                <label for="lastName" class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Appellido(s)</label>
                                <input type="text" id="lastName" v-model="contact.lastName"
                                    class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                            </div>
                            <div class="grid grid-cols-1">
                                <label for="email" class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Email</label>
                                <input type="text" id="email" v-model="contact.email"
                                    class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                            </div>
                            <div class="grid grid-cols-1">
                                <label for="phone" class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Teléfono</label>
                                <input type="text" id="phone" v-model="contact.phone"
                                    class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                            </div>
                            <div class="grid grid-cols-1">
                                <label for="orgname" class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nombre de la Organización</label>
                                <input type="text" id="orgname" v-model="contact.orgname"
                                    class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                            </div>
                            <div class="grid grid-cols-1">
                                <label for="redSocial" class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Red Social</label>
                                <select id="redSocial" v-model="contact.redS"
                                    class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="Facebook">Facebook</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="WhatsApp">WhatsApp</option>
                                </select>
                            </div>
                            <div class="grid grid-cols-1">
                                <label for="web" class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Página Web Asociada</label>
                                <input type="text" id="web" v-model="contact.web"
                                    class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                            </div>
                        </div>
                        <div class="flex justify-end md:gap-8 gap-4 pt-5 pb-5 pr-5">
                            <Link class="flex-shrink-0 bg-gray-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200 "
                                as="button"
                                method="get"
                                :href="route('dashboard')"
                            >
                                Cancelar
                            </Link>
                            <Link class="flex-shrink-0 bg-blue-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 "
                                as="button"
                                @click="submit()"
                            >
                                Guardar
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    </AppLayout>
</template>
<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/inertia-vue3';

export default {
    props:{
        contactos:{
            type:Object,
            requierd:true
        },
    },
    components:{
        AppLayout,
        Link,
    },
    data(){
        return{
            contact:{
                firstName:'',
                lastName:'',
                email:'',
                phone:'',
                orgname:'',
                redS:'',
                web:'',
            }
        }
    },
    methods:{
        submit(){
            this.$inertia.post(route('contactos.store'),this.contact);
        },
    }
}
</script>
<style lang="">
    
</style>