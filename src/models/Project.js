import { Schema, model } from "mongoose";

const projectsSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  image: {
    type: Schema.Types.String,
    required: true,
  },
  category: {
    type: Schema.Types.String,
    required: true,
  },
});

const Project = model("project", projectsSchema);

export default Project;
