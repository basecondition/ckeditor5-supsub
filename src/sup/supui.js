/**
 * @license Copyright (c) 2019, Joachim Doerr. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module supersub/sup/supui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import supIcon from '../../theme/icons/sup.svg';

const SUP = 'sup';

/**
 * The sup UI feature. It introduces the sup button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class SupUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add strikethrough button to feature components.
		editor.ui.componentFactory.add( SUP, locale => {
			const command = editor.commands.get( SUP );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Superscript' ),
				icon: supIcon,
				keystroke: 'CTRL+SHIFT+P',
				tooltip: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => editor.execute( SUP ) );

			return view;
		} );
	}
}
