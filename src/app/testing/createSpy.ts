export default function(constr: any, name: string) {
    const keys = [];
    for ( const key in constr.prototype ) {
        keys.push( key );
    }
    return keys.length > 0
        ? jasmine.createSpyObj( name, keys )
        : {};
}
