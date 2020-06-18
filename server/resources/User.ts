/* eslint-disable lines-between-class-members */
import synapse from "@synapsejs/synapse";

const { Resource, State } = synapse;
const { Text, Word } = synapse.fields;
const { schema, expose, field } = synapse.decorators;

class User extends Resource() {
  @field(new Word(3, 16)) username: string;
  @field(new Text()) password: string;

  @expose("GET /")
  @schema()
  static async method1(params: type) {
    // business logic
  }

  @schema()
  static async method2(params: type) {
    // business logic
  }
}
