<template>
  <div class="edit-line-component" :class="{'blocked' : blocked}">
    <div class="title" v-if="editmode === false">
      <div class="text">{{value}}</div>
      <div class="icon">
        <icon symbol="pencil" grayscale @click="editmode = true"></icon>
      </div>
    </div>
    <div v-else class="title">
      <div class="input">
        <app-input
          placeholder="Название новой группы"
          :value="value"
          @input="$emit('input', $event)"
          @keydown.native.enter="onApprove"
          autofocus="autofocus"
          no-side-paddings="no-side-paddings"
          :errorMessage="validation.firstError('value')"
        ></app-input>
      </div>
      <div class="buttons">
        <div class="button-icon">
          <icon symbol="tick" @click="onApprove" ></icon>
          
        </div>
        <div class="button-icon">
          <icon symbol="cross" @click="onRemove"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
  mixins: [ValidatorMixin],
  validators: {
    value: (value) => {
      return Validator.value(value).required("Введите название категории");
    },
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    errorText: {
      type: String,
      default: ""
    },
    editModeByDefault: {
      type: Boolean,
      default: false
    },
    blocked: Boolean
  },
  data() {
    return {
      editmode: this.editModeByDefault,
      title: this.value,
      categoryTitle: ""
    };
  },
  methods: {
    async onApprove() {
      if (this.title.trim() === this.value.trim()) {
        this.editmode = false;
      } else if((await this.$validate()) === false) {
          this.editmode = true;
          return
      } else {
        this.$emit("approve", this.value);
        this.editmode = false;
        console.log(this.value);
      }

    },
    onRemove() {
      this.$emit("remove", this.value);
      this.editmode = false;
    }
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input")
  }
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>