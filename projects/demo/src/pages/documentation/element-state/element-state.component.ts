import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoPath} from '@demo/constants';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'element-state-doc-page',
    imports: [TuiAddonDocModule, TuiLinkModule, RouterLink],
    templateUrl: './element-state.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ElementStateDocPageComponent {
    readonly elementStateDemo = import('./examples/element-state-demo.md?raw');

    readonly maskExpressionDocPage = `/${DemoPath.MaskExpression}`;
    readonly processorsDocPage = `/${DemoPath.Processors}`;
    readonly overwriteModeDocPage = `/${DemoPath.OverwriteMode}`;
}
