var a = 1;

onconnect = function (e) {
    var port = e.ports[0];

    port.onmessage = function () {
        port.postMessage(a++)
    }
}