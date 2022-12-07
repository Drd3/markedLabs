<template>
    <div class="container">
        <div class="lab-info-card">
            <div class="lab-info">
                <div>
                    <img src="" alt="">
                    <div class="lab-name">Laboratorio</div>
                </div>
                <div class="price">
                    <small>Precio por muestra</small>
                    <div>200.000</div>
                </div>
            </div>
            <div class="invoice-info">
                <span class="table-name">Table name /  </span> <small>1 muestra</small>
                <div class="invoice">
                <div class="invoice-item">
                    <span>Precio de envio</span>
                    <span class="invoice-price">200.000</span>
                </div>
                <div class="invoice-item">
                    <span>Precio de envio</span>
                    <span class="invoice-price">200.000</span>
                </div>
                <div class="invoice-item total-price">
                    <span>Precio total</span>
                    <span class="invoice-price">200.000</span>
                </div>
            </div>
            </div>
        </div>
        <div class="direction-card">
            Direccion del destino
            <div>Manizales / Caldas - Cra 15 # 14- 05</div>
        </div>
        <div class="send-method">
            <div class="form-item">
                <div class="label">Metodo de envio</div>
                <el-select v-model="sendMethod" placeholder="Selecciona metodo de envio">
                <el-option
                    v-for="item in sendMethodOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="form-item">
                <div class="label">Metodo de pago</div>
                <el-select v-model="payMethod" placeholder="Selecciona metodo de pago">
                <el-option
                    v-for="item in payMethodOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <button class="btn-primary w-100" @click="toFinal()">Continuar</button>
    </div>
</template>
<script>
export default {
    name: "sendMethods",
    data: function(){
        return({
        payMethodOptions: [{
          value: 'paypal',
          label: 'Paypal'
        }, {
          value: 'efecty',
          label: 'Efecty'
        }, {
          value: 'pse',
          label: 'PSE'
        }
    ],

    sendMethod: '',
    payMethod:'',

    sendMethodOptions: [{
          value: 'Servientrega',
          label: 'Servientrega'
        }, {
          value: 'FedEx',
          label: 'FedEx'
        }, {
          value: 'Envia',
          label: 'Envia'
        }
    ],

    })
},

methods:{
    toFinal(){
        this.$emit('to-final-steps', {
            status: 5
        })
    }
},

}
</script>
<style lang="scss" scoped>
    .lab-info-card, .direction-card, .send-method{
        border: $border;
        box-shadow: $shadow;
        padding: 1rem;
        margin: 1rem 0;
    }
    .lab-info-card{
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        .lab-info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-right: $border;

            .lab-name{
                font-weight: 400;
            }

            .price{
                small{
                    line-height: 0;
                }
                div{
                    font-weight: 400;
                }
            }
        }
        .invoice-info{
            padding-left: 1rem;
            .table-name{
                font-weight: 400;
            }
            .invoice{
                margin-top: 1rem;
                .invoice-item{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: .9rem;
                    
                }

                .total-price{
                    border-top: $border;
                    padding-top: .5rem;
                    margin-top: .5rem;
                }
            
            }
        }    
    }


    .form-item{
    width: 100%;
    margin: 1rem auto;
        .label{
            color: $text-muted;
            font-weight: .7rem;
            margin-bottom: .5rem;
            margin-left: .5rem;
            font-weight: 200;
        }
        .el-select{
            width: 100%;
            .el-input{
            width: 100%;
                input{
                    width: 100%;
                }     
            }
        }
        
          
}

</style>