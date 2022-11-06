<template>
  <div>
    <v-container>
        <v-row>
            <v-col v-for="skill in skills" :key="skill.title" lg="3" md="4" cols="6" >
                <v-card>
                    <i :class="`${skill.icon}`"></i>
                    <h2>{{skill.title}}</h2>
                </v-card>
            </v-col>
            
        </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
data: () =>{
    return{
        skills: [
        { title : "HTML", icon : "bx bxl-html5" },
        { title : "CSS" , icon : "bx bxl-css3" },
        { title : "Bootstrap" , icon : "bx bxl-bootstrap" },
        { title : "JavaScript" , icon : "bx bxl-javascript" },
        {title:"TypeScript",icon:"bx bxl-typescript"},
        { title : "JQUERY" , icon : "bx bxl-jquery" },
        { title : "Scss" , icon : "bx bxl-sass" },
        { title : "Json" , icon : "bx bxs-file-json" },
        {title:"Github", icon:"bx bxl-github"},
        { title : "Vue" , icon : "bx bxl-vuejs"},
        {title:"Node.js", icon:"bx bxl-nodejs"},
        {title:"MongoDB" ,icon:"bx bxl-mongodb"}
        ],
    }
}

}
</script>

<style lang="scss" scoped>
.v-card{
    text-align: center;
    display: block;
    padding: 10px;
    margin: auto;
    color: #fff;
    background-color: #2196f3 !important;
    i{
        font-size: 50px;
    }
    h2{
        font-weight: bold;
    }
}
</style>
