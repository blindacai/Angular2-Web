import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'file-content',
    template: `
                <div class="collapse" id= "{$tableid}">
                    <div class="card card-block">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
              `
})

export class FileContentComponent{
    @Input()
    tableid: string;
}
