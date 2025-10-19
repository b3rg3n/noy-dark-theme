document.querySelectorAll('*').forEach(el => {

        // МЕНЯЕМ ЦВЕТ БГ ФОНА И КНОПОК

        const bg = getComputedStyle(el).backgroundColor;

        if (bg === 'rgb(0, 53, 239)') {
            el.style.setProperty('background-color', '#3C3C3C', 'important');
        }

        if (bg === 'rgb(255, 255, 255)') {
            el.style.setProperty('background-color', '#3C3C3C', 'important');
        }

        if (bg === 'rgb(0, 91, 255)') {
            el.style.setProperty('background-color', '#303030', 'important');
        }

        if (bg === 'rgb(0, 70, 239)') {
            el.style.setProperty('background-color', '#353535', 'important');
        }

        // МЕНЯЕМ ГРАНИЦЫ НА БЕЛЫЙ

        const borderColor = getComputedStyle(el).borderBottomColor;
        const borderStyle = getComputedStyle(el).borderBottomStyle;
        const borderWidth = getComputedStyle(el).borderBottomWidth;

        if (borderColor === 'rgb(244, 244, 244)' && borderStyle !== 'none') {
            el.style.setProperty('border-bottom', `${borderWidth} solid #3C3C3C`, 'important');
        }

        if (borderColor === 'rgb(228, 228, 228)' && borderStyle !== 'none') {
            el.style.setProperty('border-bottom', `${borderWidth} solid #3C3C3C`, 'important');
        }

        if (borderColor === 'rgb(228, 228, 228)' && borderStyle !== 'none') {
            el.style.setProperty('border-bottom', `${borderWidth} solid #3C3C3C`, 'important');
        }

        if (borderColor === 'rgb(247, 247, 247)') {
            el.style.setProperty('border', '1px solid #303030', 'important');
        }

        // МЕНЯЕМ ЦВЕТА ТЕКСТА НА БЕЛЫЙ

        const color = getComputedStyle(el).color;

        if (color === 'rgb(51, 51, 51)') {
            el.style.setProperty('color', '#fff', 'important');
        }

        if (color === 'rgb(85, 85, 85)') {
            el.style.setProperty('color', '#fff', 'important');
        }

        if (color === 'rgb(46, 76, 236)') {
            el.style.setProperty('color', '#fff', 'important');
        }

        if (color === 'rgb(0, 53, 239)') {
            el.style.setProperty('color', '#fff', 'important');
        }

        if (color === 'rgb(68, 68, 68)') {
            el.style.setProperty('color', '#fff', 'important');
        }

        if (color === 'rgb(0, 91, 255)') {
            el.style.setProperty('color', '#292929', 'important');
        }

    });

    const s = document.createElement('style');
    s.textContent = `textarea, textarea[readonly] { color: #303030 !important; }`;
    document.head.appendChild(s);

    document.querySelectorAll('.content-wrapper').forEach(el => {
        el.style.setProperty('background-color', '#3c3c3c', 'important');
    });

    document.querySelector('.customer-login .fields-card').style.boxShadow = 'none';
    document.querySelector('#wrapper-footer').style.background = '#292929';



const style = document.createElement('style');
    style.textContent = `
  .sidebar-mini .panel-info,
  .sidebar-mini .panel.panel-default {
    box-shadow: 2px 11px 12px 0 #3c3c3c !important;
  }
  
  /* При наведении */
  .sidebar-menu.tree li:hover > a {
    background-color: #303030 !important;
    color: #fff !important;
  }

  /* Когда пункт выбран */
  .sidebar-menu.tree li.active > a,
  .sidebar-menu.tree li.menu-open > a {
    background-color: #303030 !important;
    color: #fff !important;
  }
  
    .sidebar-mini .table-bordered td,
  .sidebar-mini .table-bordered th {
    border: 1px solid #303030 !important;
  }
  
    .sidebar-mini .dataTables_empty,
  .sidebar-mini .table-bordered > tbody > tr > th,
  .sidebar-mini .table-bordered > tfoot > tr > th,
  .sidebar-mini .table-bordered > thead > tr > th,
  /* чтобы покрыть вложенные элементы (спаны/ссылки) */
  .sidebar-mini .table-bordered > tbody > tr > th *,
  .sidebar-mini .table-bordered > tfoot > tr > th *,
  .sidebar-mini .table-bordered > thead > tr > th * {
    color: #ffffff !important;
  }

  /* явная подмена для ссылок внутри th (если есть) */
  .sidebar-mini .table-bordered > tbody > tr > th a,
  .sidebar-mini .table-bordered > tfoot > tr > th a,
  .sidebar-mini .table-bordered > thead > tr > th a {
    color: #ffffff !important;
  }
  
  .sidebar-mini .dataTables_paginate .pagination>li>a {
    background: #3c3c3c;
    color: #fff;
  }
  
  .sidebar-mini .btn-default, .sidebar-mini .btn-info, .sidebar-mini .btn-primary, .sidebar-mini .btn.bg-red {
    background-color: #292929;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 10px 30px;
    cursor: pointer;
    outline: 0;
    font-weight: 400;
    text-transform: none;
    border-radius: 4px !important;
    min-width: 100px;
  }

  table.dataTable thead tr > .dtfc-fixed-left,
  table.dataTable thead tr > .dtfc-fixed-right,
  table.dataTable tbody tr > .dtfc-fixed-left,
  table.dataTable tbody tr > .dtfc-fixed-right {
    background-color: transparent !important;
  }

  .sidebar-mini a {
    color: #fff;
  }

  .dataTables_wrapper .dataTables_length select {
    border: 1px solid #aaa;
    border-radius: 3px;
    padding: 5px;
    background-color: #303030;
    padding: 4px;
  }

.k-picker-wrap .k-i-clock:before {
    content: "\\f017";
    color: #fff;
}

.k-datetimepicker .k-link {
    color: #fff !important;
}

.sidebar-mini .form-horizontal .label-wrapper .fa-question-circle:before {
    content: "\\f29c";
    color: #e0e0e0 !important;
}

.sidebar-mini #average-order-report-grid_wrapper td:nth-child(6), .sidebar-mini #customers-grid_wrapper td:nth-child(6) {
    color: #fff;
}

.form-control.customer-time-zone option {
  background-color: #303030;
  color: #fff; /* чтобы текст был читаемый */
}

  a:hover {
    color: #353535 !important;
  }

`;

document.head.appendChild(style);