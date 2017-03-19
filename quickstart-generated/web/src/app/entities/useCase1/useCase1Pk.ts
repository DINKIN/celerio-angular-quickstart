//
// Source code generated by Celerio, a Jaxio product.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Follow us on twitter: @jaxiosoft
// Need commercial support ? Contact us: info@jaxio.com
// Template pack-angular:web/src/app/entities/compositepk.ts.cpk.vm
//

export class UseCase1Pk {
    id1 : Date;
    id2 : string;

    constructor(json? : any) {
        if (json != null) {
            if (json.id1 != null) {
                this.id1 = new Date(json.id1);
            }
            this.id2 = json.id2;
        }
    }
}