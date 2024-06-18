import Component from '@ember/component';
import classic from 'ember-classic-decorator';

@classic
export default class ChildComponent extends Component {
	willDestroyElement() {
		super.willDestroyElement();
		this.incrementWillDestroy();
	}
}
