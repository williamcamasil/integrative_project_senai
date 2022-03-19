package br.com.babyfix.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tb_veiculo")
public class VeiculosModel implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(nullable = false)
	private String marca;
	@Column(nullable = false)
	private String modelo;
	@Column(nullable = false)
	private long ano;
	@Column(nullable = false)
	private long km;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getModelo() {
		return modelo;
	}
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	public long getAno() {
		return ano;
	}
	public void setAno(long ano) {
		this.ano = ano;
	}
	public long getKm() {
		return km;
	}
	public void setKm(long km) {
		this.km = km;
	}
}
