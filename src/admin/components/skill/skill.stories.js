import skill from "./skill";

export default {
  title: "skill",
  components: {skill}
}

export const defaultView = () => ({
  components: {skill},
  template: `
    <skill></skill>
  `
});