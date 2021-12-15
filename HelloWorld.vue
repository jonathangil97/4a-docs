<template>
<div>
<div>
{{estudiantes.nombre}}
<ul>

</ul>
</div>
<li v-for="estudiante in estudiantes" v-bind:key="estudiante.id">
{{estudiante.id}}

{{estudiante.apellido}}
</li>
<li v-for="character in characters" v-bind:key="character.id">
{{character.name}}
{{character.status}}
</li>
</div>
</template>
<script>
    import axios from "axios";
    export default{ 
        name: "HelloWorld",
        data() {
            return {
                estudiantes: [],
                characters:[]
            };
        },
        async mounted() {
            try {
            var vue=this;
                var result = await axios({
                    method: "POST",
                    url: "http://localhost:4000/",
                data: {
                        query: `
                            {
                                estudiantes {
                                    id,                                   
                                    apellido
                                  }
                                  characters {
                                    id,  
                                    name,
                                    status
                                  }                
                            }
`                        
                    }
                });

                vue.estudiantes = result.data.data.estudiantes;  //ojo con esto 
                vue.characters = result.data.data.characters;
                console.log(result.data.data.estudiantes);
            }   catch (error) {
                    console.error(error);
                }
        }
    }
</script>

<style scoped>
</style>