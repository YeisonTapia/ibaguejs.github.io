<template>
	<div class="hero py-12">
		<v-row
			class=" py-12"
			align="center"
			justify="center">
			<v-col class="text-center my-12 py-12" cols="12">
				<v-img 
					class="display-1 font-weight-thin mb-1 mt-12 py-12"
					height="auto" 
					width="100%" 
					max-height="135px" 
					:src="require('~/assets/images/logo.png')" 
					alt="Logo IbagueJS" 
					aspect-ratio="1" 
					contain="contain">
				</v-img>
				<h4 class="title font-weight-regular black--text subheading mb-12">
					{{subTitle}}
				</h4>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	props:{
		subTitle:{
			type: String,
			default: 'Comunidad JavaScript de Ibagué'
		}
	}
}
</script>