/* Split path into device, dir, name and ext.
 *
 * |Name  |Type  |Desc                               |
 * |------|------|-----------------------------------|
 * |path  |string|Path to split                      |
 * |return|object|Object containing dir, name and ext|
 * 
 * ```javascript
 * splitPath('f:/foo/bar.txt'); // -> {dir: 'f:/foo/', name: 'bar.txt', ext: '.txt'}
 * splitPath('/home/foo/bar.txt'); // -> {dir: '/home/foo/', name: 'bar.txt', ext: '.txt'} 
 * ```
 */

function exports(path) 
{
    var match = path.match(regSplit);
    
    return {
        dir: match[1],
        name: match[2],
        ext: match[3]
    };
}

var regSplit = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;