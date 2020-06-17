/* eslint-disable lines-between-class-members */
import { Resource, State } from "synapse";
import { Text, Word } from "synapse/build/lib/fields";
import { schema, expose } from "synapse/build/lib/abstract/Controllable";
import { field } from "synapse/build/lib/abstract/Validatable";

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
