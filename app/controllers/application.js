import Controller from '@ember/controller';
import { action, setProperties } from "@ember/object";

export default class ApplicationController extends Controller {
	willDestroyCalls = 0;

	@action
	incrementWillDestroy() {
		setProperties(this, { willDestroyCalls: this.willDestroyCalls + 1 });
	}
}
