declare module 'jspdf-autotable' {
    import jsPDF from 'jspdf';
  
    interface AutoTableOptions {
      head: string[][];
      body: string[][];
      startY?: number;
      theme?: 'striped' | 'grid' | 'plain';
      styles?: {
        fontSize?: number;
        textColor?: number[];
        fillColor?: number[];
        [key: string]: any;
      };
      headStyles?: {
        fillColor?: string | number[];
        textColor?: string | number[];
        [key: string]: any;
      };
      alternateRowStyles?: {
        fillColor?: string | number[];
        [key: string]: any;
      };
      margin?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
      };
    }
  
    function autoTable(doc: jsPDF, options: AutoTableOptions): void;
  
    export default autoTable;
  }
  