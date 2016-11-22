import { Component, Input } from '@angular/core';
import {Library} from "../../service/model/library";
import {updateLibrary} from "../../service/model/updateLibrary";

@Component({
    selector: '[update-button]',
    template: `
                  <td align = "center">
                  <button type = "submit" 
                          [disabled] = "libtoupdate.status == 'Pending'"
                          (click) = "updateLib(libtoupdate, newfieldvalue)">
                    update
                  </button>
                  </td>
              `
})

export class UpdateButton{
    @Input('update-button')
    libtoupdate: Library;

    @Input()
     newfieldvalue: updateLibrary;

    updateLib(libtoupdate: Library, newfieldvalue: updateLibrary){

    }
}

