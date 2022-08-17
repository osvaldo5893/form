import{_ as g}from"./AppLayout.018838b8.js";import{L as f,D as a,o as x,c as b,w as l,a as t,m as _,v as n,E as r,G as h,b as c,i as p}from"./app.0a133fb3.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";const v={props:{contactos:{type:Object,requierd:!0}},components:{AppLayout:g,Link:f},data(){return{contact:{firstName:"",lastName:"",email:"",phone:"",orgname:"",redS:"",web:""}}},methods:{submit(){this.$inertia.post(route("contactos.store"),this.contact)}}},w=t("h2",{class:"text-center text-2xl font-bold leading-7 sm:text-3xl sm:truncate py-4 bg-blue-500 text-white"}," Agregar Contacto ",-1),N={class:"py-12"},k={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},V={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},A={class:"grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7"},S={class:"grid grid-cols-1"},L=t("label",{for:"firstName",class:"uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"},"Nombre",-1),U={class:"grid grid-cols-1"},C=t("label",{for:"lastName",class:"uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"},"Appellido(s)",-1),B={class:"grid grid-cols-1"},F=t("label",{for:"email",class:"uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"},"Email",-1),M={class:"grid grid-cols-1"},T=t("label",{for:"phone",class:"uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"},"Tel\xE9fono",-1),W={class:"grid grid-cols-1"},j=t("label",{for:"orgname",class:"uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"},"Nombre de la Organizaci\xF3n",-1),D={class:"grid grid-cols-1"},E=t("label",{for:"redSocial",class:"uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"},"Red Social",-1),G=t("option",{value:"Facebook"},"Facebook",-1),I=t("option",{value:"Instagram"},"Instagram",-1),O=t("option",{value:"WhatsApp"},"WhatsApp",-1),q=[G,I,O],z={class:"grid grid-cols-1"},P=t("label",{for:"web",class:"uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"},"P\xE1gina Web Asociada",-1),R={class:"flex justify-end md:gap-8 gap-4 pt-5 pb-5 pr-5"},H=p(" Cancelar "),J=p(" Guardar ");function K(u,e,Q,X,s,i){const d=a("Link"),m=a("AppLayout");return x(),b(m,null,{header:l(()=>[w]),default:l(()=>[t("div",N,[t("div",k,[t("div",V,[t("form",{onSubmit:e[8]||(e[8]=_((...o)=>i.submit&&i.submit(...o),["prevent"])),class:"mb-6"},[t("div",A,[t("div",S,[L,n(t("input",{type:"text",id:"firstName","onUpdate:modelValue":e[0]||(e[0]=o=>s.contact.firstName=o),class:"py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,512),[[r,s.contact.firstName]])]),t("div",U,[C,n(t("input",{type:"text",id:"lastName","onUpdate:modelValue":e[1]||(e[1]=o=>s.contact.lastName=o),class:"py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,512),[[r,s.contact.lastName]])]),t("div",B,[F,n(t("input",{type:"text",id:"email","onUpdate:modelValue":e[2]||(e[2]=o=>s.contact.email=o),class:"py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,512),[[r,s.contact.email]])]),t("div",M,[T,n(t("input",{type:"text",id:"phone","onUpdate:modelValue":e[3]||(e[3]=o=>s.contact.phone=o),class:"py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,512),[[r,s.contact.phone]])]),t("div",W,[j,n(t("input",{type:"text",id:"orgname","onUpdate:modelValue":e[4]||(e[4]=o=>s.contact.orgname=o),class:"py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,512),[[r,s.contact.orgname]])]),t("div",D,[E,n(t("select",{id:"redSocial","onUpdate:modelValue":e[5]||(e[5]=o=>s.contact.redS=o),class:"py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"},q,512),[[h,s.contact.redS]])]),t("div",z,[P,n(t("input",{type:"text",id:"web","onUpdate:modelValue":e[6]||(e[6]=o=>s.contact.web=o),class:"py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,512),[[r,s.contact.web]])])]),t("div",R,[c(d,{class:"flex-shrink-0 bg-gray-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200",as:"button",method:"get",href:u.route("dashboard")},{default:l(()=>[H]),_:1},8,["href"]),c(d,{class:"flex-shrink-0 bg-blue-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200",as:"button",onClick:e[7]||(e[7]=o=>i.submit())},{default:l(()=>[J]),_:1})])],32)])])])]),_:1})}const tt=y(v,[["render",K]]);export{tt as default};
