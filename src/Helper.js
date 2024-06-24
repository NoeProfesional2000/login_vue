//import $ from "jquery";
import Swal from "sweetalert2";
import moment from "moment";
moment.locale("es");  

// seccion de loader
//const loader = $("#loader");

/*const loaderIn = () => {
    loader.css("display", "flex");
};

const loaderOut = () => {
    loader.fadeOut();
}; */

// manejo de errores del servidor mediante ajax

/**
 * Maneja los errores generados medante peticiones ajax
 * @param {Response} response
 */
const responseAxios = response => {
    console.log(response);
    let message = "Error interno, intentelo más tarde";
    let typeMessage = "error";
    let title = "";
    let timer = 0;

    if (response != undefined) {
        let { status, data } = response;

        switch (status) {
            case 200:
                {
                    title = data.title || "";
                    message = data.message || "";
                    timer = data.timer || 0;
                    typeMessage = "success";
                }
                break;
            case 201:
                {
                    title = data.title || "";
                    message = data.message || "";
                    timer = data.timer || 0;
                    typeMessage = "success";
                }
                break;
            case 404:

                {
                    let errors = data.errors || {};
                    let sizeErrors = Object.keys(errors).length;

                    title = data.title || "Verifique su información";
                    message = "El recurso no se encontro";
                    typeMessage = data.icon || "warning";

                    for (var [key, value] of Object.entries(errors)) {
                        switch (key) {
                            case "title":
                                title = value[0];

                                break;
                            case "icon":
                                typeMessage = value[0];
                                break;

                            default:
                                message += sizeErrors > 1 ? `${value[0]}<br />` : value[0];
                        }
                    }
                }

                break;
            case 422:
                {
                    let errors = data.errors || {};
                    let sizeErrors = Object.keys(errors).length;

                    title = data.title || "Verifique su información";
                    message = sizeErrors > 0 ? "" : data.message || "";
                    typeMessage = data.icon || "warning";

                    for (let [key, value] of Object.entries(errors)) {
                        switch (key) {
                            case "title":
                                title = value[0];

                                break;
                            case "icon":
                                typeMessage = value[0];
                                break;

                            default:
                                message += sizeErrors > 1 ? `${value[0]}<br />` : value[0];
                        }
                    }
                }
                break;
        }
    }
    sweetInfo(title, message, typeMessage, timer);
};

/**
 * @param {string} title
 * @param {string} text
 * @param {string} icon success default
 * @param {number} timer 0 default
 */
const sweetInfo = (title = "", text = "", icon = "success", timer = 0) => {
    Swal.fire({
        title,
        html: text,
        icon,
        iconColor: "#309cce",
        confirmButtonText: "Aceptar",
        confirmButtonColor : "#309cce",
        customClass: {
            //confirmButton: "btn btn-rounded btn-primary mb-5",
        },
        focusConfirm: true,
        timer: timer,
        timerProgressBar: timer != 0,
    });
};

/**
 *
 * @param {string} title titulo modal
 * @param {string} text texto del modal
 * @param {callback} callback función callback si se da en eliminar al botón
 */
const sweetDelete = (title, html, callback, icon = "warning", confirmButtonText = "Eliminar", cancelButtonText = "cancelar") => {
    Swal.fire({
        title,
        html,
        icon,
        iconColor: "#309cce",
        showCancelButton: true,
        confirmButtonText,
        cancelButtonText,
        confirmButtonColor: '#0D99FF',
        customClass: {
            confirmButton: "btn-confirm-alert",
            cancelButton: "btn-cancel-alert",
        },
    }).then(result => {
        if (result.isConfirmed) {
            callback();
        }
    });
};



// exportacion de funciones
export {
    //loaderIn,
    //loaderOut,
    responseAxios,
    sweetInfo,
    sweetDelete,
    Swal,
    moment
};