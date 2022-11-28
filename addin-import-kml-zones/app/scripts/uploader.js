(function () {
    "use strict";
    var Uploader = function () {
        var dragAndDropArea = null,
            defaultClass = null;

        return {
            init: function () {
                dragAndDropArea = kml.args.container.getElementsByClassName("dragAndDropUploader")[0];
                defaultClass = dragAndDropArea.className;
                var inputFile = dragAndDropArea.getElementsByTagName("input")[0];

                dragAndDropArea.ondragover = function () {
                    angular.injector(["ng", "importKMLZones"]).get("clearService").clear();
                    dragAndDropArea.className = defaultClass + " hoverArea";
                    return false;
                };
                dragAndDropArea.ondragleave = function () {
                    dragAndDropArea.className = defaultClass;
                    return false;
                };
                dragAndDropArea.ondrop = function (event) {
                    event.preventDefault();
                    dragAndDropArea.className = defaultClass;

                    var files = event.dataTransfer.files;
                    kml.parseFiles(files);
                };
                dragAndDropArea.onclick = function () {
                    inputFile.click();
                };
            },
            clear: function () {
                dragAndDropArea.className = defaultClass;
            }
        };
    };

    let globals = (function () { return this || (0, eval)("this"); }());

    if (typeof module !== "undefined" && module.exports) {
        module.exports = Uploader;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return Uploader; });
    } else {
        globals.Uploader = Uploader;
    }
}());
