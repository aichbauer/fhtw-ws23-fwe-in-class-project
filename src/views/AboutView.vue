
<template>
  <div class="about">
    <Title type="h1">Profil</Title>
    <div v-if="!edit">
      <Paragraph v-if="this.store.isLoggedIn">
        <b>
          Name:
        </b>
        {{ this.store.username }}
      </Paragraph>
    </div>
    <div v-if="edit">
      <FormField htmlFor="name" label="Name" id="name" placeholder="Name" type="text" :value="profile.name" />
    </div>
    <Button :handleClick="toggleEdit">
      {{ !edit ? 'Edit' : 'View' }}
    </Button>
  </div>
</template>

<script>
import Title from '@/components/atoms/Title.vue';
import Paragraph from '@/components/atoms/Paragraph.vue';
import Button from '@/components/atoms/Button.vue';
import FormField from '@/components/molecules/FormField.vue';
import { useUserStore } from '@/pinia-store/user';


export default {
  name: 'AboutView',
  data() {
    return ({
      store: useUserStore(),
    });
  },
  methods: {
    toggleEdit(test) {
      console.log(test);
      this.edit = !this.edit;
    },
  },
  mounted: async function () {
    console.log('mounted about');
    console.log(this.store.isLoggedIn);
  },
  components: {
    Title,
    Paragraph,
    Button,
    FormField,
  },
}
</script>
